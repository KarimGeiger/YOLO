use std::os;
use std::io::fs;

fn main() {
    let p = Path::new(os::args()[0].clone());
    println!("YOLO!");
    fs::unlink(&p);
}
