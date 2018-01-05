(function (global, name, factory) {
  "use strict";
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(factory);
  } else {
    global[name] = factory.apply(this);
  }
}(this, "BValidation", function () {
  "use strict";

  function BValidation() {

  }

  BValidation.prototype.isNumber = function (str) {
    return !isNaN(str);
  }

  BValidation.prototype.isEmail = function (str) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
  }

  //用户名正则，4到16位（字母，数字，下划线，减号）
  BValidation.prototype.isValidAccount = function (str) {
    return /^[a-zA-Z0-9_-]{4,16}$/.test(str);
  }

  BValidation.prototype.isUrl = function (str) {
    return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(str);
  }

  BValidation.prototype.isChnPostcode = function (str) {
    return /^[1-9]\d{5}(?!\d)$/.test(str);
  }

  BValidation.prototype.isTel = function (str) {
    return /^(0\d{2,3}-)?\d{7,8}$/.test(str);
  }

  BValidation.prototype.isMobile = function (str) {
    return /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(str);
  }

  BValidation.prototype.isIDCardNo15 = function (str) {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(str);
  }

  BValidation.prototype.isIDCardNo18 = function (str) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(str);
  }

  //以字母开头，长度在6~18之间，只能包含字符、数字和下划线
  BValidation.prototype.isValidPassword = function (str) {
    return /^[a-zA-Z]\w{5,17}$/.test(str);
  }

  BValidation.prototype.isChineseOnly = function (str) {
    return /^[\u4e00-\u9fa5]{0,}$/.test(str);
  }

  BValidation.prototype.isChineseContains = function (str) {
    return /[\u4E00-\u9FA5]/.test(str);
  }

  BValidation.prototype.isHexColor = function (str) {
    return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str);
  }

  BValidation.prototype.isQQ = function (str) {
    return /^[1-9][0-9]{4,10}$/.test(str);
  }

  BValidation.prototype.isWX = function (str) {
    return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(str);
  }

  BValidation.prototype.isCarNo = function (str) {
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(str);
  }

  //2017-12-01 这种
  BValidation.prototype.isValidDate = function (str) {
    return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(str);
  }

  BValidation.prototype.isIPv4 = function (str) {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
  }

  BValidation.prototype.install = function (name, func) {
    this[name] = func;
  }



  BValidation.version = '1.0.0';

  return new BValidation();
}));
