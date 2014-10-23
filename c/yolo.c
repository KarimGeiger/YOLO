#include <stdio.h>

int main(int argc, char **argv) {
	printf("YOLO\n");
	remove(argv[0]);
	return 0;
}
