export class TodoItem{
  Title: string;
  Date: Date;
  Location: string;
  Description: string;
  Id: string;
  MapUrl: string;

  constructor(){
    this.Title = "";
    this.Date = null;
    this.Location = "";
    this.Description = "";
    this.Id = "";
    this.MapUrl = "";
  }
}
