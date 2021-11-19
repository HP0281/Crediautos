import { Observable } from 'rxjs';
export class FileItem {
  public fileActual : File;
  public name: string;
  public uploading = false;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;

  constructor(public file: File) {
    this.fileActual = file;
    this.name = file.name;
  }
}