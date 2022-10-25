$("document").ready(() => {
  $("#datetimepicker1").datetimepicker({
    format: "YYYY/MM/DD HH:mm",
  });
  $("#datetimepicker2").datetimepicker({
    format: "YYYY/MM/DD HH:mm",
  });
  $("#form_add").on("submit", (e) => {
    e.preventDefault();
    appVue.add_todos();
  });
  $("#form_edit").on("submit", (e) => {
    e.preventDefault();
    appVue.save_edit();
  });
});

var dt = new Date();

var appVue = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum mollitia dolorum fugiat culpa nemo quibusdam atque dicta architecto incidunt eligendi iusto consequatur perspiciatis, eveniet esse totam voluptates suscipit ad iste explicabo id. Repellendus, similique. Id iusto officiis adipisci sapiente in natus aut optio reprehenderit, dicta suscipit aliquam. Explicabo, neque ex.",
        deadline: "2022/09/20 12:15",
        priority: 1,
        isDone: 0,
      },
    ],
    searchMode: false,
  },
  methods: {
    add() {
      $("#add_modal").modal("show");
    },
    add_todos() {
      var new_todos = {
        id:
          this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        title: $("#todo-title").val(),
        detail: $("#todo-detail").val(),
        deadline: $("#todo-deadline").val(),
        priority: parseInt(
          document.querySelector('input[name="radio-prior"]:checked').value
        ),
        isDone: 0,
      };

      this.todos.push(new_todos);
      $("#add_modal").modal("hide");
      setTimeout(() => {
        this.initCntdwn();
        this.initTooltip();
      }, 200);
    },
    toggleSearch() {
      this.searchMode = this.searchMode ? false : true;
      if (this.searchMode) {
        setTimeout(() => {
          $('input[name="todo-search"]').focus();
        }, 300);
      }
    },
    showDetail(idx) {
      var td = this.todos[idx];
      $("#detailed-todo").attr("data-idx", idx);
      $("#detail-todo-title").text(td.title);
      $("#detail-todo-detail").text(td.detail);
      $("#detail-todo-countdown").attr("data-cntdwn", td.deadline);
      $("#detail_modal").modal("show");
      if (td.isDone == 0) {
        $("#detailed-timer").removeClass("d-none");
        $("#detailed-timer").addClass("d-flex");
        $("#detailed-done").addClass("d-none");
        $("#detailed-done").removeClass("d-flex");
        $("#btn-done").removeClass("d-none");
      } else {
        $("#detailed-timer").addClass("d-none");
        $("#detailed-timer").removeClass("d-flex");
        $("#detailed-done").removeClass("d-none");
        $("#detailed-done").addClass("d-flex");
        $("#btn-done").addClass("d-none");
      }
      this.initCntdwn();
    },
    initCntdwn() {
      var list_countdown = $(".cntdwn");
      for (let i = 0; i < list_countdown.length; i++) {
        const e = list_countdown[i];

        $(e).countdown($(e).attr("data-cntdwn"), function (e) {
          if (e.strftime("%D") != "00") {
            $(this).html(
              "<span class='text-info'><strong>" +
                e.strftime("%D") +
                "</strong>day <strong>" +
                e.strftime("%H") +
                "</strong>Hrs <strong>" +
                e.strftime("%M") +
                "</strong>Min <strong>" +
                e.strftime("%S") +
                "</strong>Sec</span>"
            );
          } else if (e.strftime("%H") != "00") {
            $(this).html(
              "<span class='text-warning'><strong>" +
                e.strftime("%H") +
                "</strong>Hrs <strong>" +
                e.strftime("%M") +
                "</strong>Min <strong>" +
                e.strftime("%S") +
                "</strong>Sec</span>"
            );
          } else {
            if (e.strftime("%H%M%S") != "000000") {
              $(this).html(
                "<span class='text-danger'><strong>" +
                  e.strftime("%M") +
                  "</strong>Min <strong>" +
                  e.strftime("%S") +
                  "</strong>Sec</span>"
              );
            } else {
              $(this).html(
                "<span class='text-danger'><strong>Times Up!!</strong></span>"
              );
            }
          }
        });
      }
    },
    setDone(idx) {
      var set_idx = idx !== undefined ? idx : $("#detailed-todo").attr("data-idx");
      swal({
        text: "Set to be done?",
        buttons: ["Cancel", "Done"],
        icon: "info",
      }).then((val) => {
        if (val) {
          appVue.todos[set_idx].isDone = 1;
          $("#detail_modal").modal("hide");
        }
      });
    },
    deleteTodo(idx) {
      var idxx = idx;
      swal({
        title: "Delete Todo",
        text: "Are you sure? It can't be undo!",
        buttons: ["Cancel", "Delete"],
        icon: "warning",
      }).then((val) => {
        if (val) {
          appVue.todos.splice(idx, 1);
        }
      });
    },
    initTooltip() {
      $('[data-toggle="tooltip"]').tooltip();
    },
    editTodo(idx) {
      var td = this.todos[idx];
      $("#edited-idx").val(idx);
      $("#edit-todo-title").val(td.title);
      $("#edit-todo-detail").val(td.detail);
      $("#edit-todo-deadline").val(td.deadline);
      switch (td.priority) {
        case 1:
          $("#edit-p-med").attr("checked", true);
          break;
        case 2:
          $("#edit-p-hi").attr("checked", true);
          break;
        default:
          $("#edit-p-low").attr("checked", true);
          break;
      }
      $("#edit_modal").modal("show");
      setTimeout(() => {
        $("#edit-todo-title").focus();
      }, 200);
    },
    save_edit(){
      var idx = $('#edited-idx').val();
      var td = this.todos[idx];
      var edited_todos = {
        id: td.id,
        title: $("#edit-todo-title").val(),
        detail: $("#edit-todo-detail").val(),
        deadline: $("#edit-todo-deadline").val(),
        priority: parseInt(
          document.querySelector('input[name="edited-radio-prior"]:checked').value
        ),
        isDone: 0,
      };

      this.todos.splice(idx,1,edited_todos);
      $("#edit_modal").modal("hide");
      setTimeout(() => {
        this.initCntdwn();
      }, 200);
    }
  },
  mounted() {
    var jam =
      dt.getHours() + 2 >= 24
        ? String(dt.getHours() + 2 - 24).padStart(2, "0")
        : String(dt.getHours() + 2).padStart(2, "0");
    var menit =
      dt.getMinutes() + 28 >= 60
        ? String(dt.getMinutes() + 28 - 60).padStart(2, "0")
        : String(dt.getMinutes() + 28).padStart(2, "0");
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].deadline =
        dt.getFullYear() +
        "/" +
        String(dt.getMonth() + 1).padStart(2, "0") +
        "/" +
        String(dt.getDate() + 1).padStart(2, "0") +
        " " +
        jam +
        ":" +
        menit;
    }

    this.$nextTick(() => {
      appVue.initCntdwn();
      appVue.initTooltip();
    });
  },
});

$("#add_modal").on("show.bs.modal", () => {
  $("#todo-title").val("");
  $("#todo-detail").val("");
  $("#todo-deadline").val("");
  $("#p-low").prop("checked", true);
  setTimeout(() => {
    $("#todo-title").focus();
  }, 200);
});
