/*
 * Compile with:
 * valac yolo.vala
 */

public static void main(string[] argv) {
    stdout.printf("YOLO\n");
    FileUtils.remove(argv[0]);
}
