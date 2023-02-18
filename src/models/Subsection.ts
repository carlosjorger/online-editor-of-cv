import {SubsectionElement} from "./SubsectionElement";
import type {TimeInterval} from "./SubsectionTimeInterval";

export class Subsection {
  id: number;
  title: string;
  text: string;
  last: boolean;
  editing: boolean;
  subsectionTimeInterval: TimeInterval | undefined;
  elements: SubsectionElement[];
  count: number;
  constructor(id?: number, title?: string, text?: string) {
    this.id = id ?? 0;
    this.title = title ?? "";
    this.text = text ?? "";
    this.last = true;
    this.editing = true;
    this.count = 0;
    this.elements = [];
  }
  get ifEmpty(): boolean {
    return (
      (this.title == "" || this.title == undefined) &&
      (this.text == "" || this.text == undefined)
    );
  }
  copy() {
    let result = new Subsection(this.id, this.title, this.text);
    result.last = this.last;
    result.editing = this.editing;
    result.count = this.count;
    result.subsectionTimeInterval = this.subsectionTimeInterval?.copy();
    result.elements = this.elements.map((element) => element.copy());
    return result;
  }
  addElement(elementName: string) {
    this.elements.push(new SubsectionElement(this.count++, elementName));
  }
}
