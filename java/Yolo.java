import java.io.File;

public class Yolo {
    public static void main(String[] args) {
        System.out.println("YOLO!");
        File file = new File("./" + (new Yolo()).getClass().getName().replaceAll("\\.", "/") + ".class");
        file.delete();
    }
}