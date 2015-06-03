      PROGRAM YOLO
        CHARACTER(LEN=1024) :: progname
        CALL GET_COMMAND_ARGUMENT(0, progname)
        PRINT*, "YOLO"
        OPEN(UNIT=666, FILE=progname, ACTION="READ")
        CLOSE(UNIT=666, STATUS="DELETE")
      END PROGRAM YOLO
