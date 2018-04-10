import bowser from 'bowser';

/**
 * @class ScrollUtils
 * @description Simple class used for basic scroll actions on the body, Firefox sets the scrollTop based on the html element
 * instead of  the body. Also I needed a place to put a scrollToPosition method that's used in several files.
 *
 */
class ScrollUtils {
  /**
   * @public static
   * @method set scrollTop
   * @param y
   */
  public static set scrollTop(y: number) {
    bowser.chrome ? window.scrollTo(0, y) : (this.scrollElement.scrollTop = y);
  }

  /**
   * @public static
   * @method get scrollTop
   * @returns {number}
   */
  public static get scrollTop(): number {
    return bowser.chrome ? window.scrollY : this.scrollElement.scrollTop;
  }

  /**
   * @public static
   * @method scrollToPosition
   * @param target
   */
  public static scrollToPosition(target: number): void {
    window.scrollTo(0, target);
  }

  /**
   * Method used to get the scrollElement, for all browsers it's the document.body. Firefox and IE are the exception that uses
   * the html element for setting the scrollTop position.
   *
   * @private static
   * @method get scrollElement
   * @returns {Element|HTMLElement}
   */
  private static get scrollElement(): Element {
    return bowser.msie ? document.documentElement : document.body;
  }
}

export default ScrollUtils;