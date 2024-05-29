import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Opinions } from './components/Opinions.jsx';
import { AddOpinions } from './components/AddOpinions.jsx';
import { Questions } from './components/Questions.jsx';
import { AddQuestions } from './components/AddQuestions.jsx';
import { Contact } from './components/Contact.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />

                </Route>
                <Route path='/about' element={<Layout />}>
                    <Route index element={<About />} />

                </Route>
                <Route path='/skills' element={<Layout />}>
                    <Route index element={<Skills />} />

                </Route>
                <Route path='/opinions' element={<Layout />}>
                    <Route index element={<Opinions />} />

                </Route>
                <Route path='/addopinions' element={<Layout />}>
                    <Route index element={<AddOpinions />} />

                </Route>
                <Route path='/questions' element={<Layout />}>
                    <Route index element={<Questions />} />

                </Route>
                <Route path='/addquestions' element={<Layout />}>
                    <Route index element={<AddQuestions />} />

                </Route>
                <Route path='/contact' element={<Layout />}>
                    <Route index element={<Contact />} />

                </Route>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)
