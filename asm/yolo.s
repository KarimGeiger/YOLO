; for x86_64 Linux
; compile with `nasm -f elf64 yolo.s && ld yolo.o -o yolo'

section .text

	global _start
	_start:

	mov rax, 1	; 1 = system call for write
			; (see arch/x86/include/generated/uapi/asm/unistd_64.h
			; for more syscalls)
	mov rdi, 1	; 1 = stdout
	mov rsi, msg	; YOLO :DDD
	mov rdx, len
	syscall

	mov rax, 87	; unlink
	pop rcx		; rcx first points to argc, we do not want this.
	pop rcx		; rcx now points to argv (or just argv[0]...)
	mov rdi, rcx
	syscall

	mov rax, 60	; 60 = system call for exit
	xor rdi, rdi	; exit status 0
	syscall

section .data

msg	db	"YOLO", 10	; 10 = 0x0a = "\n"
len	equ	$-msg
