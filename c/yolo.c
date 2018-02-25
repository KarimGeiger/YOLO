#include <stdio.h>

int main(int argc, char **argv) {
	puts("YOLO");
	remove(argv[0]);
	return 0;
}
