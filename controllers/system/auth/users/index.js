"use strict";
var passport     = require('passport');
var auth         = require('../../../../lib/auth');
var User         = require('../../../../models/system/User');
var UserInfo     = require('../../../../models/UserInfo');
var Role         = require('../../../../models/system/Role');
var branchHelper = require('../../../../lib/branchHelper');
var mongoose     = require('mongoose');
var ObjectId     = mongoose.Types.ObjectId;
var _            = require("underscore");
var util         = require('util');

module.exports = function (router) {
    var roleList = ['ROLE_ADMIN', 'ROLE_USER'];
    router.get('/', auth.isAuthenticated(roleList), function (req, res, next) {
        var condition = {}
        var name = req.query.name;
        console.log("哈哈哈哈哈")
        if(name){
           condition['name'] = new RegExp(name,'gi');
        }
        var page = 1;
        if (req.query.page) {
            page = req.query.page
        }



            UserInfo.paginate(condition, page, 10, function (err, pageCount, UserInfo, dataCount) {
                console.log("UserInfo"+JSON.stringify(UserInfo));
                var model = {
                    page: page,
                    pageCount: pageCount,
                    view: 'system.users.index',
                    UserInfo: UserInfo,
                    name:name
                };
                console.log("><><><><><><><><");
                res.json(_.extend(model, res.locals.menuInit));
            });
        })


    router.get('/add', auth.isAuthenticated('ROLE_ADMIN'), function (req, res, next) {

       var model = {};
        model.add = "1";
        model.view = 'system.users.add';
        res.json(_.extend(model, res.locals.menuInit));

    });
    router.post('/add', auth.isAuthenticated('ROLE_ADMIN'), function (req, res, next) {
        var user = req.body.user;
        var userInfo = req.body.userInfo;
        userInfo.name = user.name;
        var address = [];
        var detail = {
            value:userInfo.address
        }
        address[0] = detail;
        userInfo.address = address;
        var userModel = new User(user);
        userInfo.user = userModel._id;
        var userInfoModel = new UserInfo(userInfo);
        userModel.userInfo = userInfoModel._id;
        userModel.save(function(err,doc){
            var model = {
                message: "ok"
            }
            if (err) {
                model.err = err;
                return res.json(model);
            }
            userInfoModel.save(function(err,docs){
                var model = {
                    message: "ok"
                }
                if (err) {
                    model.err = err;
                    return res.json(model);
                }
                var model = {

                    showMessage: '新增成功！',
                    redirect: 'system/auth/users'
                }
                res.json(model);
            })
        })
    })
    router.get('/:name/edit', auth.isAuthenticated('ROLE_ADMIN'), function(req, res, next) {
        var name = req.params.name;
        User.findOne({name:name},function(err,userone){
            var model = {
                message: "ok"
            }
            if (err) {
                model.err = err;
                return res.json(model);
            }
            Role.find({}, function (err, Roles) {
                UserInfo.findOne({user: userone._id}, function (err, userInfo) {
                    User.findById(userone._id,function(err,user){
                        var model = {
                            message: "ok"
                        }
                        if (err) {
                            model.err = err;
                            return res.json(model);
                        }
                      var role = user.roles;
                        var unrole = [];
                        var roleOk = [];
                        role.forEach(function(e){
                            Roles.forEach(function(e1){
                                if(e == e1.code){
                                    roleOk.push(e1)
                                }
                            })
                        })
                        Roles.forEach(function(e1){
                            var i = 0;
                            roleOk.forEach(function(e2){
                                if(e1.code == e2.code){
                                    i++
                                }

                            })
                            if(i==0){
                                unrole.push(e1)
                            }
                        })


                        var address = userInfo.address[0].value
                        var model = {
                            userone: userone,
                            userInfo: userInfo,
                            address: address,
                            Roles:Roles,
                            role:role,
                            unrole:unrole,
                            roleOk:roleOk,
                            view: 'system.users.change',
                            id:userone._id
                        }
                        console.log("id"+userone._id);
                        res.json(_.extend(model, res.locals.menuInit));

                    })

                })
            });
        })
    });
    router.post('/edit', auth.isAuthenticated('ROLE_ADMIN'), function(req, res, next) {
        var user = req.body.user;
        var userInfo = req.body.userInfo;
        userInfo.name = user.name;
        var address = [];
        var detail = {
            value:userInfo.address
        }
        address[0] = detail;
        userInfo.address = address;
        //var userModel = new User(user);
        //userInfo.user = userModel._id;
        //var userInfoModel = new UserInfo(userInfo);
        //userModel.userInfo = userInfoModel._id;
        console.log(user)
        console.log(userInfo)
        var name = user.name;
        User.update({name:name},{$set:user},function(err,doc){
            var model = {
                message: "ok"
            }
            if (err) {
                model.err = err;
                return res.json(model);
            }
            UserInfo.update({name:name},{$set:userInfo},function(err,docs){
                var model = {
                    message: "ok"
                }
                if (err) {
                    model.err = err;
                    return res.json(model);
                }
                var model = {
                    showMessage: '修改成功！',
                    redirect: 'system/auth/users'
                }
                res.json(model);
            })
        })

    });
    router.get('/:name/delete', auth.isAuthenticated('ROLE_ADMIN'), function(req, res, next) {
        var name = req.params.name;
        console.log(name)
        User.findOneAndRemove({
            name: name}, function(err, user) {
            if (err) {
                return next(err);
            }
            UserInfo.findOneAndRemove({name:name}, function(err, userInfo) {
                if (err) {
                    return next(err);
                }
                res.json({
                    message: 'OK'
                });
            });
        });
    });
    router.get('/:name/resetPwd',auth.isAuthenticated('ROLE_ADMIN'),function(req,res){
       var name = req.params.name;
        User.find({name:name},function(err,userone){
            var model = {
                name:name,
                userone:userone,
                view:'system.users.resetPwd'
            }
            res.json(_.extend(model, res.locals.menuInit));
        })


    })
    router.get('/resetPwd',auth.isAuthenticated('ROLE_ADMIN'),function(req,res) {
        var name = req.query.name;
        var password = req.query.password;
        console.log(">>"+name);
        User.update({name: name}, {$set: {password: password}},function(err, userone) {
            var model = {
                message: "ok"
            }
            if (err) {
                model.err = err;
                return res.json(model);
            }
            var model = {
                showMessage: '重置成功！',
                redirect: 'system/auth/users'
            }
            res.json(model);

        })
    })
    router.get('/:id/search', auth.isAuthenticated('ROLE_ADMIN'), function(req, res, next) {
        var id = req.params.id;
        User.findById(id,function(err,user) {
            Role.find({}, function (err, Roles) {
                var model = {
                    message: 'ok'
                };
                if (err) {
                    model.err = err;
                    return res.json(model);
                }
                model.user = user;
                model.Roles = Roles;
                res.json(model);
            })
        })

    })
    router.get('/changeRole', auth.isAuthenticated('ROLE_ADMIN'), function(req, res, next) {
        var id = req.query.id;
        var value = req.query.value;
        var state = req.query.state;

            User.update({_id: id}, {"$addToSet": {"roles": value}}, function (err, result) {
                console.log("----->>>>" +JSON.stringify(result));
            })

    })
    router.get('/changeRole_red', auth.isAuthenticated('ROLE_ADMIN'), function(req, res, next) {
        var id = req.query.id;
        var value = req.query.value;
        var state = req.query.state;

            User.update({_id: id}, {"$pull": {"roles": value}}, function (err, result) {
                console.log("----->>>>" +JSON.stringify(result));
            })

    })

    };
