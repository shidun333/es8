webpackJsonp(["app/js/group/thread-add/index"],[function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=a("d5fb0e67d2d4c1ebaaed"),d=r(n),o=$("#user-thread-form"),l="#groupthread-save-btn",u="thread_content";new d.default(o);var i=CKEDITOR.replace(u,{toolbar:"Thread",filebrowserImageUploadUrl:$("#"+u).data("imageUploadUrl"),allowedContent:!0,height:300});i.on("change",function(){$("#"+u).val(i.getData())}),i.on("blur",function(){$("#"+u).val(i.getData())});var c=o.validate({currentDom:l,rules:{"thread[title]":{required:!0,minlength:2,maxlength:100},"thread[content]":{required:!0,minlength:2}}});$(l).click(function(){c.form()&&o.submit()})}]);
