#import <Foundation/Foundation.h>

int main(const int argc, char** argv)
{
    NSLog(@"YOLO");
    NSString *filename = [NSString stringWithFormat:@"%s", argv[0]];
    NSError *error = nil;
    [[NSFileManager defaultManager] removeItemAtPath:filename error:&error];
    return 0;
}
