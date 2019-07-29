// initialises a babe experiment with babeInit
$("document")
  .ready(function () {
    // prevent scrolling when space is pressed
    window.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    };

    // calls babeInit
    babeInit({
      views_seq: [
            intro,
            instructions,
            instructions_reaction,
            practice_reaction,
            begin_real_reaction,
            task_reaction,
            pause_reaction,
            instructions_goNoGo,
            practice_goNoGo,
            begin_real_goNoGo,
            task_goNoGO,
            pause_goNoGo,
            instructions_discrimination,
            practice_discrimination,
            begin_real_discrimination,
            task_discrimination,
            post_test,
            thanks
        ],
      deploy: {
        experimentID: "48",
        serverAppURL: "https://mcmpact.ikw.uni-osnabrueck.de/babe/api/submit_experiment/",
        deployMethod: "debug",
        contact_email: "michael.franke@uni-osnabrueck.de",
        prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
      },
      progress_bar: {
        in: [
                // list the view-names of the views for which you want a progress bar
                "main_reaction",
                "main_goNoGo",
                "main_discrimination"
            ],
        style: "separate",
        width: 100
      }
    });
  });