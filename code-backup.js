    lsTheme: _ => {
      const notes = getScale("major", 50);
      const positions = [3, 1, 4, 1, 2, 3, 1, 5, 4, 3, 2, 1, 0];
      const songNotes = getArrayPositions(notes, positions);
      play.notes(songNotes, 200);
    },
