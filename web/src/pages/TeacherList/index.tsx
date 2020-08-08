import React, { useState, FormEvent } from 'react';

import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';
import Input from '../../componentes/Input';
import Select from '../../componentes/Select';

import api from '../../services/api';

import './styles.css'

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são so Proffys disponíveis.">
                <form id="search-teacher" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'WEB', label: 'WEB' },
                            { value: 'FUP', label: 'FUP' },
                            { value: 'LMS', label: 'LMS' },
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Bioligia', label: 'Bioligia' },
                            { value: 'Ciencias', label: 'Ciencias' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Portuguers', label: 'Portuguers' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Geografia', label: 'Geografia' }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabado' }
                        ]}
                    />
                    <Input
                        type="time"
                        name="tima"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>
    )
}

export default TeacherList;