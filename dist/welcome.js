System.register(["aurelia-framework"], function (_export) {
  var declarePropertyDependencies, _createClass, _classCallCheck, Welcome, UpperValueConverter;

  return {
    setters: [function (_aureliaFramework) {
      declarePropertyDependencies = _aureliaFramework.declarePropertyDependencies;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _createClass(Welcome, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            }
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            }
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            }
          }
        });

        return UpperValueConverter;
      })());

      declarePropertyDependencies(Welcome, "fullName", ["firstName", "lastName"]);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLDJCQUEyQixpQ0FFdEIsT0FBTyxFQWdCUCxtQkFBbUI7Ozs7QUFsQnhCLGlDQUEyQixxQkFBM0IsMkJBQTJCOzs7Ozs7Ozs7QUFFdEIsYUFBTztBQUNQLGlCQURBLE9BQU8sR0FDTDtnQ0FERixPQUFPOztBQUVoQixjQUFJLENBQUMsT0FBTyxHQUFHLHdDQUF3QyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCOztxQkFMVSxPQUFPO0FBT2Qsa0JBQVE7aUJBQUEsWUFBRTtBQUNaLDBCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRzthQUM3Qzs7QUFFRCxpQkFBTzttQkFBQSxtQkFBRTtBQUNQLG1CQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO2FBQ3JDOzs7O2VBYlUsT0FBTzs7QUFnQlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7QUFDOUIsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gscUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNyQzs7OztlQUhVLG1CQUFtQjs7O0FBTWhDLGlDQUEyQixDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=