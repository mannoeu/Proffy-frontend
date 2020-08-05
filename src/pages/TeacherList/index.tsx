import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await api.get("/classes", {
        params: {
          subject,
          weekday,
          time,
        },
      });
      setTeachers(res.data);
    } catch (err) {
      alert("Houve um problema");
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Nodejs", label: "Nodejs" },
              { value: "JavaScript", label: "JavaScript" },
              { value: "Ruby", label: "Ruby" },
              { value: "Backend", label: "Backend" },
              { value: "Clean Code", label: "Clean Code" },
              { value: "HTML5", label: "HTML5" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={weekday}
            onChange={(e) => setWeekday(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            label="Hora"
            type="time"
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
