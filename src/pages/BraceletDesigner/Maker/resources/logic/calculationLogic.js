
import { RowType } from "../constants/nodeConstants";
import { ImageHeight, ImageWidth, LeftOrRight } from "../constants/stageConstants"

//#region Basic Math Calculations

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

export const countNodes = (nodes) => {
  let count = 0;
  nodes.forEach(row => {
    count += row.length;
  });
  return count;
}

//#endregion

//#region Index Calculations

export const getRelativeStrandIndex = (nodeIndex, rowType, leftOrRight) => {
  let base = rowType === RowType.LONG
    ? nodeIndex * 2
    : nodeIndex * 2 + 1;
  if (leftOrRight === LeftOrRight.LEFT) {
    return base;
  } else {
    return base + 1;
  }
}

export const getNodeIndexByStrandIndex = (strandIndex) => {
  // add one in order to do regular math - (index typically starts at 0)
  let relStrandIndex = strandIndex + 1;

  // 1,2 = 1; 3,4 = 2; 5,6 = 3;
  // For this reason, if relStrandIndex is an odd number, add one again. (ex. 5 + 1 = 6 which = 3)
  if (!isEven(relStrandIndex)) {
    relStrandIndex ++;
  }

  // now get relative node index by dividing (each node has two strands connected)
  let relNodeIndex = relStrandIndex / 2;

  // subtract one to get actual index
  return relNodeIndex - 1;
  
}

export const getStrandIndexesByNodeIndex = (nodeIndex) => {
    // add one in order to do regular math - (index typically starts at 0)
    let relNodeIndex = nodeIndex + 1;

    // 1,2 = 1; 3,4 = 2; 5,6 = 3;
    // get the 2nd strand number by multiplying by two
    let relStrand2Index = relNodeIndex * 2;

    // the first index will be 1 less than the 2nd
    let relStrand1Index = relStrand2Index - 1;
  
    // subtract one from each to get actual indexes
    return [relStrand1Index - 1, relStrand2Index - 1];
}

//#endregion

//#region Position Calculations

export const calculateStrandImageRenderingPosition = (positionIndex, rowIndex, canvasHeight, isEnd = false) => {
  let yStart = rowIndex === 0 && !isEnd
    ? 0
    : ImageHeight.STRAND_START_LEFT + (rowIndex * ImageHeight.STRAND_LEFT);

  if (isEnd) {
    yStart = canvasHeight - ImageHeight.STRAND_END_LEFT;
  }

  let xStart = ImageWidth.TILE_START + (positionIndex * ImageWidth.STRAND_LEFT);

  return {x: xStart, y: yStart};
}

export const calculateStrandImageRenderingPositionForLower = (positionIndex, rowIndex) => {
  let yStart = ImageHeight.STRAND_START_LEFT + (rowIndex * ImageHeight.STRAND_LEFT);

  let xStart = ImageWidth.TILE_START + (positionIndex * ImageWidth.STRAND_LEFT);

  return {x: xStart, y: yStart};
}

export const calculateOddNodeRenderingPosition = (node, rowIndex) => {
  let xStart = node.topLeftStrand.xStart + ImageWidth.STRAND_LEFT - (ImageWidth.CIRCLE_BLANK / 2);
  let yStart = ImageHeight.TILE_START + (rowIndex * (ImageHeight.TILE / 2));
  return {x: xStart, y: yStart};
}

export const calculateEvenNodeRenderingPosition = (rowIndex, posIndex, prevRow) => {
  let aboveLeftNode = prevRow[posIndex];
  let aboveRightNode = prevRow[posIndex + 1];
  let aboveLeftX = calculateOddNodeRenderingPosition(aboveLeftNode, rowIndex).x;
  let aboveRightX = calculateOddNodeRenderingPosition(aboveRightNode, rowIndex + 1).x;
  let halfXDistance = (aboveRightX - aboveLeftX) / 2;
  console.log(`x shift for short rows: ${halfXDistance}`);

  let xStart = aboveLeftX + halfXDistance;
  let yStart = ImageHeight.TILE_START + ((rowIndex + 1) * (ImageHeight.TILE / 2));
  return {x: xStart, y: yStart};
}

export const showRenderPositionDifferences = (nodes) => {

  // let firstRow = nodes[0];
  // let secondRow = nodes[1];
  // let nodeA1 = firstRow[0];
  // let nodeA2 = firstRow[1];
  // let nodeB1 = secondRow[0];

  // let xNodeDif = Math.abs(nodeA2.xStart - nodeA1.xStart);
  // console.log(`x difference between nodes: ${xNodeDif}`);

  // let yNodeDif = Math.abs(nodeB1.yStart - nodeA1.yStart);
  // console.log(`y difference between nodes: ${yNodeDif}`);

  // let xLongNodeEdgeDif = nodeA1.xStart;
  // console.log(`long row left node distance to left side: ${xLongNodeEdgeDif}`);

  // let xShortNodeEdgeDif = nodeB1.xStart;
  // console.log(`short row left node distance to left side: ${xShortNodeEdgeDif}`);

  // let xLongLeftStrandDif = nodeA1.bottomLeftInfo.x - nodeA1.xStart;
  // let yLongLeftStrandDif = nodeA1.bottomLeftInfo.y - nodeA1.yStart;
  // let xLongRightStrandDif = nodeA1.bottomRightInfo.x - nodeA1.xStart;
  // let yLongRightStrandDif = nodeA1.bottomRightInfo.y - nodeA1.yStart;
  // console.log(`node left strand rel difs: {x: ${xLongLeftStrandDif}, y ${yLongLeftStrandDif}}`);
  // console.log(`node right strand rel difs: {x: ${xLongRightStrandDif}, y ${yLongRightStrandDif}}`);

  // let xShortLeftStrandDif = nodeA1.bottomLeftInfo.x - nodeB1.xStart;
  // let yShortLeftStrandDif = nodeA1.bottomLeftInfo.y - nodeB1.yStart;
  // let xShortRightStrandDif = nodeA1.bottomRightInfo.x - nodeB1.xStart;
  // let yShortRightStrandDif = nodeA1.bottomRightInfo.y - nodeB1.yStart;
  // console.log(`short row node left strand rel difs: {x: ${xShortLeftStrandDif}, y ${yShortLeftStrandDif}}`);
  // console.log(`short row node right strand rel difs: {x: ${xShortRightStrandDif}, y ${yShortRightStrandDif}}`);
}

//#endregion

//#region Size Calculations

export const isCanvasScaledUp = (canvas) => {
  var rect = canvas.getBoundingClientRect();
  let actualWidth = rect.width;
  let calcWidth = canvas.width;
  let widthScale =  actualWidth / calcWidth;

  return widthScale > 1;
}

// export const calculateCanvasScaleIncrease = (canvas, nodes) => {
//   var rect1 = canvas.getBoundingClientRect();

//   let actualWidth = rect1.width;
//   let calcWidth = canvas.width;
//   let widthScale =  actualWidth / calcWidth;
//   console.log(`calc width: ${calcWidth}, actual: ${actualWidth}, scale: ${widthScale}`);

//   let actualHeight = rect1.height;
//   let calcHeight = canvas.height;
//   let heightScale = actualHeight / calcHeight;
//   console.log(`calc height: ${calcHeight}, actual: ${actualHeight}, scale: ${heightScale}`);
// }

export const calculateCanvasWidth = (nodesAcross) => {
  let endWidths = ImageWidth.TILE_LEFT + ImageWidth.TILE_RIGHT;
  let nodeAreaWidth = ImageWidth.STRAND_LEFT + ImageWidth.STRAND_RIGHT;
  let totalWidth = endWidths + (nodeAreaWidth * (nodesAcross - 1));
  return totalWidth;
}

export const calculateCanvasHeight = (rowCount) => {
  let endHeights = ImageHeight.TILE_START + ImageHeight.TILE_END;
  let rowsHeight = ImageHeight.TILE * rowCount;
  let totalHeight = endHeights + rowsHeight;
  return totalHeight;
}

export const calculateNumberOfBackgroundImages = (nodesAcross, rowCount) => {
  const tilesPerNode = 2;
  const imagesInARow = tilesPerNode * nodesAcross;
  const imagesInAllRows = rowCount * imagesInARow;
  const startAndEndImages = 2 * imagesInARow;

  const total = imagesInAllRows + startAndEndImages;
  //console.log(`bg total calculated: ${total}`);
  return total;
}

export const calculateNumberOfStrandImages = (nodesAcross, rowCount) => {
  const strandsAcross = nodesAcross * 2;
  let total = strandsAcross * rowCount + strandsAcross;
  return total;
}

export const calculateNumberOfStrandImagesAfterSetup = (nodesAcross, rowCount) => {
  let startStrands = nodesAcross * 2;
  let endStrands = (nodesAcross - 1) * 2;
  let total = startStrands + endStrands;
  for (let i = 1; i <= rowCount; i++) {
    if (i % 2 !== 0) {
      total += nodesAcross * 2;
    }
  }
  return total;
}

export const calculateStrandWidthAndHeight = (rowIndex, rowCount, isStart) => {
  let width = ImageWidth.STRAND_LEFT;
  let height = ImageHeight.STRAND_LEFT;
  if (isStart) {
    height = ImageHeight.STRAND_START_LEFT;
  } else if (rowIndex === rowCount - 1) {
    height = ImageHeight.STRAND_END_LEFT;
  }

  return {
    width: width,
    height: height,
  }
}

//#endregion

