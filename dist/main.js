System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
  var LogManager, ComputedObservationAdapter, ObjectObservationAdapter, ConsoleAppender;

  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

    aurelia.container.registerSingleton(ObjectObservationAdapter, ComputedObservationAdapter);

    aurelia.start().then(function (a) {
      return a.setRoot("app", document.body);
    });
  }

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
      ComputedObservationAdapter = _aureliaFramework.ComputedObservationAdapter;
      ObjectObservationAdapter = _aureliaFramework.ObjectObservationAdapter;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      "use strict";

      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsRUFFViwwQkFBMEIsRUFBRSx3QkFBd0IsRUFEcEQsZUFBZTs7dUJBTVAsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1Isc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQUM7O0FBRW5CLFdBQU8sQ0FBQyxTQUFTLENBQ2QsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQzs7QUFFN0UsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQzVEOzs7O0FBbEJPLGdCQUFVLHFCQUFWLFVBQVU7QUFFVixnQ0FBMEIscUJBQTFCLDBCQUEwQjtBQUFFLDhCQUF3QixxQkFBeEIsd0JBQXdCOztBQURwRCxxQkFBZSwwQkFBZixlQUFlOzs7OztBQUd2QixnQkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDOUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=