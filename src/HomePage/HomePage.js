import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../common/Page/Page";
import { Table } from "../common/Table/Table";
import { useGetNotes } from "../common/Data/useGetNotes";
import css from "./HomePage.module.css";

export function HomePage() {
  const { notes, notesLoading } = useGetNotes();

  const navigate = useNavigate();

  function handleAdd() {
    navigate("/new");
  }

  return (
    <Page title="Notes">
      {notesLoading && <div>Loading notes ...</div>}
      <button onClick={handleAdd} className={css.addbutton}>
        Add new note
      </button>
      <Table
        columns={[
          { name: "id", caption: "ID", align: "left" },
          { name: "note", caption: "Note", align: "left" },
        ]}
        data={notes}
        keyColumnName="id"
      ></Table>
    </Page>
  );
}