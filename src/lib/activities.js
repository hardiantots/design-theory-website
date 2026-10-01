export const initialOrder=['event','date','location','description','cta'];
export function movePriority(order,id,delta){const at=order.indexOf(id),next=at+delta;if(at<0||next<0||next>=order.length)return order;const result=[...order];[result[at],result[next]]=[result[next],result[at]];return result;}
export function alignmentPosition(mode,width){return mode==='left'?36:mode==='center'?220-width/2:404-width;}
export function consistentAlignment(modes){return modes.length>0&&modes.every(mode=>mode===modes[0]);}
