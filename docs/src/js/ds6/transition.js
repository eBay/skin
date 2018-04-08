/**
 * This module should be shared with ebayui-core and potentially extracted into it's own package.
 */

var ELEMENT_NODE = 1;
var TRANSITION_END = 'transitionend';
var IMMEDIATE_TRANSITION_REG = /0m?s(?:, )?/g;

/**
 * Applies a primer `-init` class before starting a transition
 * to make transitioning properties that are not animatable easier.
 * 
 * **Order**
 * 1. Add class: "$name-init"
 * 2. Wait one frame.
 * 3. Remove class "$name-init".
 * 4. Add class "$name".
 * 5. Wait for animation to finish.
 * 6. Remove class "$name".
 *
 * @param {HTMLElement} el The root element that contains the animation.
 * @param {string} name The base className to use for the transition.
 * @param {Function} cb A callback called after the transition as ended.
 */
module.exports = function transition(el, baseClass, cb) {
  var ended;
  var pending;
  var ran = 0;
  var classList = el.classList;
  var initClass = baseClass + '-init';
  var cancelFrame = nextFrame(function () {
    el.addEventListener(TRANSITION_END, listener, true);
    classList.add(baseClass);
    classList.remove(initClass);
    pending = getTransitionCount(el);
    cancelFrame = undefined;
    if (pending === 0) {
      cancel();
    }
  });

  classList.add(initClass);

  return cancel;

  /**
   * Cancels the current transition and resets the className.
   */
  function cancel() {
    if (ended) {
      return;
    }


    ended = true;
    el.removeEventListener(TRANSITION_END, listener, true);

    if (cancelFrame) {
      cancelFrame();
      classList.remove(initClass);
    } else {
      classList.remove(baseClass);
    }
  }

  /**
   * Handles a single transition end event.
   * Once all child transitions have ended the overall animation is completed.
   */
  function listener() {
    if (++ran === pending) {
      ended = true;
      el.removeEventListener(TRANSITION_END, listener, true);
      classList.remove(baseClass);
      if (cb) {
        cb();
      }
    }
  }
}


/**
 * Walks the tree of an element and counts how many transitions have been applied.
 *
 * @param {HTMLElement} el 
 * @return {number}
 */
function getTransitionCount(el) {
  var count = window
    .getComputedStyle(el)
    .transitionDuration
    .replace(IMMEDIATE_TRANSITION_REG, '') ? 1 : 0;

  var child = el.firstElementChild;
  while (child) {
    count += getTransitionCount(child);
    child = child.nextElementSibling;
  }

  return count;
}

/**
 * Runs a function during the next animation frame.
 *
 * @param {function} fn a function to run on the next animation frame.
 * @return {function} a function to cancel the callback.
 */
function nextFrame(fn) {
  var frame;
  var cancelFrame;

  if (window.requestAnimationFrame) {
    frame = requestAnimationFrame(function () {
      frame = requestAnimationFrame(fn);
    });
    cancelFrame = cancelAnimationFrame;
  } else {
    frame = setTimeout(fn, 26); // 16ms to simulate RAF, 10ms to ensure called after the frame.
    cancelFrame = clearTimeout;
  }

  return function () {
    if (frame) {
      cancelFrame(frame);
      frame = undefined;
    }
  }
}
