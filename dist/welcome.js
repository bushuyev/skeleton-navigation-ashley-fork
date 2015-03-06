System.register([], function (_export) {
  var _createClass, _classCallCheck, Welcome, UpperValueConverter;

  return {
    setters: [],
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
          this.borderColor = "red";
          this.signalRIsConnected = false;
          this.loggingIsEnabled = false;
        }

        _createClass(Welcome, {
          borderColorStyle: {
            get: function () {
              return "border: solid 1px " + this.borderColor + ";";
            }
          },
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxPQUFPLEVBdUJQLG1CQUFtQjs7Ozs7Ozs7Ozs7QUF2Qm5CLGFBQU87QUFDUCxpQkFEQSxPQUFPLEdBQ0w7Z0NBREYsT0FBTzs7QUFFaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQztBQUN4RCxjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixjQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN6QixjQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLGNBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7U0FDL0I7O3FCQVJVLE9BQU87QUFVZCwwQkFBZ0I7aUJBQUEsWUFBRztBQUNyQiw0Q0FBNEIsSUFBSSxDQUFDLFdBQVcsT0FBSTthQUNqRDs7QUFFRyxrQkFBUTtpQkFBQSxZQUFFO0FBQ1osMEJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO2FBQzdDOztBQUVELGlCQUFPO21CQUFBLG1CQUFFO0FBQ1AsbUJBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7YUFDckM7Ozs7ZUFwQlUsT0FBTzs7QUF1QlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7QUFDOUIsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gscUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNyQzs7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=