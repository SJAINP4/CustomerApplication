//browser console
//email
//db
export interface ILogger{
    Log();
}
export class BaseLogger implements ILogger{
    Log(){
        console.log("Base")
    }
}
export class ConsoleLogger extends BaseLogger{
    Log(){
        console.log ("Using console Logger")
        }
}
export class DbLogger extends BaseLogger{
    Log(){
        console.log ("Using DbLogger")
}
}
export class FileLogger extends BaseLogger{
    Log(){
        console.log ("Using File Logger")
}
}