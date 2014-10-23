#include <iostream>
#include <cstdio>

int main(int argc, char** argv)
{
    std::cout << "YOLO" << std::endl;
    std::remove(argv[0]);
    return 0;
}
