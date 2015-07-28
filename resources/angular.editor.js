angular.module('edit.editor',[]).directive('editor', function() {
    return {
        require : '?ngModel',
        link : function(scope, element, attrs, ngModel) {
            var editor = undefined;
            if (!ngModel) {
                return;
            }
            KindEditor.ready(function(K) {
                editor = K.create(element[0], {
                    width:'100%',
                    uploadJson: '/uploadImg',//这个是远程文件上传的路径
                    allowFileManager : true,
                    afterCreate: function () {
                        this.html(ngModel.$viewValue)
                    },
                    afterChange: function () {
                        $this = this;
                        scope.$apply(function() {
                            ngModel.$setViewValue($this.html());
                        });
                    },
                    afterUpload : function(url) {
                        alert(url);
                    }
                });
            });
        }
    };
});