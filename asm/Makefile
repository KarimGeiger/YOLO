ASMFLAGS = -f elf64
OBJS = yolo.o

all:
	nasm $(ASMFLAGS) yolo.s
	ld $(OBJS) -o yolo

.PHONY: clean
clean:
	rm -f $(OBJS) yolo
