type wordFlickProps = {
  paragraphs: Array<string>;
  printElement: HTMLHeadingElement;
};

export const wordFlick = ({
  paragraphs,
  printElement,
}: wordFlickProps) => {
  let part: string,
    i = 0,
    offset = 0,
    forwards = true,
    skipCount = 0;
  const skipDelay = 35,
    speed = 70;

  setInterval(function () {
    // check if we should go forward and print current paragraph
    if (forwards) {
      // check if we have print all the text in the paragraph and should go backward
      if (offset >= paragraphs[i].length) {
        ++skipCount;
        if (skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else {
      // check if we have finished go back and jump to the next paragraph
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        // check if we have reach the last paragraph and should be reset to the first paragraph
        if (i >= paragraphs.length) {
          i = 0;
        }
      }
    }

    // get content base on current offset and calculate new offset
    part = paragraphs[i].substring(0, offset);
    if (skipCount === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    printElement.innerHTML = part;
  }, speed);
};
