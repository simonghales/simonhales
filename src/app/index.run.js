(function() {
  'use strict';

  angular
    .module('simonhales')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
