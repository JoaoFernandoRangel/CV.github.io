// Dados de tradução incorporados diretamente no JavaScript
const translations = {
    pt: {
        name: "JOÃO GUIMARÃES",
        location: "Vila Velha, Brazil - 25 anos",
        nationality: "Brasileiro",
        phone: "+55 (27) 988 629 108",
        email: "joaofrguimaraes1l@gmail.com",
        github: "GitHub",
        linkedin: "LinkedIn",
        themeToggle: "Modo Noturno",
        languageToggle: "English",
        experience: "Experiência",
        experienceTitle1: "2Solve Inteligência Técnológica",
        experienceDate1: "Junho, 2024 -- Abril, 2025",
        experienceJob1: "Estagiário de Desenvolvimento de Firmware",
        experienceLocation1: "Vitória - ES",
        experienceDesc1: [
            "Desenvolvi interfaces dinâmicas e responsíval ao usuário utilizando LVGL e displays LCDS embarcados com ESP32-S3.",
            "Contribui para a criação de arquiteturas padronizadas de firmware e o estabelecimento de padrões de projetos para projetos internos baseados em ESP32.",
            "Projetei e implementei bibliotecas de componentes modulares de modo a acelerar a integração de diversas tecnologias através de diversas plataformas em múltiplos projetos da empresa."
        ],
        projects: "Projetos",
        project1Title: "Rede IoT com LoRa e Webserver baseada no MCU ESP32",
        project1Tech: "ESP32, LoRa, MQTT, HTTP",
        project1Date: "2022-2025",
        project1Desc: [
            "Projetei e implementei uma rede de sensores sem fio baseada em LoRa, gerenciada por um gateway em ESP32 com suporte aos protocolos MQTT e HTTP.",
            "Desenvolvi um web server integrado hospedado no ESP32, acessível via rede Wi-Fi local, permitindo atualizações de firmware over-the-air (OTA) e controle remoto dos nós LoRa distribuídos."
        ],
        project2Title: "Gêmeo Digital para um Sistema Híbrido Térmo-Fotovoltaico",
        project2Tech: "Python, Pandas, Industrial Communication Protocols",
        project2Date: "2023-2025",
        project2Desc: [
            "Participei do desenvolvimento de um Gêmeo Digital para um sistema híbrido fotovoltaico-térmico legado, criando um gateway para comunicação com a plataforma Smarthub usando protocolos industriais.",
            "Conectei o sistema físico a uma simulação 3D desenvolvida em Unity3D para monitoramento e análise em tempo real da micro usina.",
            "A pesquisa resultou na publicação de um artigo"
        ],
        project3Title: "Gêmeo Digital para Planta Didática de Manufatura com Braço Robótico",
        project3Tech: "Python, Esp32, C/C++",
        project3Date: "2021 - 2023",
        project3Desc: [
            "Participei do desenvolvimento de um Gêmeo Digital para monitoramento remoto de uma planta didática de manufatura equipada com um braço robótico.",
            "Projetei e desenvolvi firmware para coletar dados de sensores e atuadores via ESP32, sincronizando-os com a pose do braço robótico.",
            "Os dados foram transmitidos usando MQTT e visualizados em tempo real usando uma interface customizada em Unity3D.",
            "A pesquisa produziu 2 artigos publicados."
        ],
        education: "Educação",
        educationTitle: "Instituto Federal do Espírito Santo - IFES",
        educationDate: "Março 2021 -- Estimado para fim de 2026",
        educationDegree: "Bacharelado em Engenharia Elétrica",
        educationLocation: "Vitória - ES",
        skills: "Habilidades",
        skillsLanguages: "Idiomas",
        skillsLanguagesDesc: "Fluente: Inglês (C1 - Cambridge) | Intermediário: Francês",
        skillsTech: "Tecnologias",
        skillsTechDesc: "C/C++, Python, FreeRTOS, MQTT",
        skillsTools: "Ferramentas de desenvolvimento",
        skillsToolsDesc: "Visual Studio Code, PlatformIO, Git, GitHub, EezStudio",
        skillsFrameworks: "Frameworks",
        skillsFrameworksDesc: "Arduino, GitFlow, fastAPI, LVGL"
    },
    en: {
        name: "JOÃO GUIMARÃES",
        location: "Vila Velha, Brazil - 25 years old",
        nationality: "Brazilian",
        phone: "+55 (27) 988 629 108",
        email: "joaofrguimaraes1l@gmail.com",
        github: "GitHub",
        linkedin: "LinkedIn",
        themeToggle: "Dark Mode",
        languageToggle: "Português",
        experience: "Experience",
        experienceTitle1: "2Solve Inteligência Técnológica",
        experienceDate1: "June, 2024 -- March, 2025",
        experienceJob1: "Firmware Development Intern",
        experienceLocation1: "Vitória - ES",
        experienceDesc1: [
            "Developed a dynamic and responsive user interface using LVGL on ESP32-S3 with LCD display.",
            "Contributed to the creation of standardized firmware architecture and design patterns for internal ESP32-based projects.",
            "Designed and implemented modular component libraries to accelerate integration of diverse technologies across multiple company projects."
        ],
        projects: "Projects",
        project1Title: "Lora and Webserver IoT network based on ESP32 MCU",
        project1Tech: "ESP32, LoRa, MQTT, HTTP",
        project1Date: "2022-2025",
        project1Desc: [
            "Designed and implemented a LoRa-based wireless sensor network managed by an ESP32-based gateway supporting both MQTT and HTTP protocols.",
            "Developed an integrated web server hosted on the ESP32, accessible via a local Wi-Fi network, allowing over-the-air (OTA) firmware updates and remote control of distributed LoRa nodes."
        ],
        project2Title: "Digital Twin for a Photovoltaic Thermal Hybrid System",
        project2Tech: "Python, Pandas, Industrial Communication Protocols",
        project2Date: "2024-2025",
        project2Desc: [
            "Engineered a Digital Twin for a legacy photovoltaic-thermal hybrid system by developing a gateway to enable communication with the Smarthub platform using industrial protocols.",
            "Connected the physical system to a 3D simulation developed in Unity3D for real-time monitoring and analysis.",
            "Contributed to research efforts resulting in 1 published paper."
        ],
        project3Title: "Digital Twin for Didactic Manufacturing Plant with a Robotic Arm",
        project3Tech: "Python, Esp32, C/C++",
        project3Date: "2021 - 2023",
        project3Desc: [
            "Developed a Digital Twin for remote monitoring of a didactic manufacturing cell equipped with a robotic arm.",
            "Designed embedded firmware to collect data from sensors and actuators via ESP32, synchronizing it with the robotic arm's pose.",
            "Data was transmitted using MQTT and visualized in real time using a custom Unity3D interface.",
            "Research contributed to 2 published papers."
        ],
        education: "Education",
        educationTitle: "Federal Institute of Espírito Santo",
        educationDate: "March 2021 -- End of 2026 (estimated)",
        educationDegree: "Bachelors in Electrical Engineering",
        educationLocation: "Vitória - ES",
        skills: "Skills",
        skillsLanguages: "Languages",
        skillsLanguagesDesc: "Native: Portuguese | Advanced: English | Intermediate: French",
        skillsTech: "Technologies",
        skillsTechDesc: "C/C++, Python, FreeRTOS, MQTT",
        skillsTools: "Developer Tools",
        skillsToolsDesc: "Visual Studio Code, PlatformIO, Git, GitHub, EezStudio",
        skillsFrameworks: "Frameworks",
        skillsFrameworksDesc: "Arduino, GitFlow, fastAPI, LVGL"
    }
};

// Variável global para o idioma atual
let currentLanguage = 'pt';

// Função para alterar o idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = translations[lang];

    // Atualizar textos
    document.getElementById('name').textContent = elements.name;
    document.getElementById('location').textContent = elements.location;
    document.getElementById('nationality').textContent = elements.nationality;
    document.getElementById('phone').textContent = elements.phone;
    document.getElementById('email').textContent = elements.email;
    document.getElementById('github-link').textContent = elements.github;
    document.getElementById('linkedin-link').textContent = elements.linkedin;
    document.getElementById('theme-toggle').textContent = elements.themeToggle;
    document.getElementById('language-toggle').textContent = elements.languageToggle;

    // Experiência
    document.getElementById('experience-title').textContent = elements.experience;
    document.getElementById('experience-1-title').textContent = elements.experienceTitle1;
    document.getElementById('experience-1-date').textContent = elements.experienceDate1;
    document.getElementById('experience-1-job').innerHTML = elements.experienceJob1 + ' | <span id="experience-1-location">' + elements.experienceLocation1 + '</span>';
    const expDescList = document.getElementById('experience-1-desc');
    expDescList.innerHTML = '';
    elements.experienceDesc1.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        expDescList.appendChild(li);
    });

    // Projetos
    document.getElementById('projects-title').textContent = elements.projects;

    // Projeto 1
    document.getElementById('project-1-title').innerHTML = elements.project1Title + ' <span class="project-tech" id="project-1-tech">' + elements.project1Tech + '</span>';
    document.getElementById('project-1-date').textContent = elements.project1Date;
    const proj1DescList = document.getElementById('project-1-desc');
    proj1DescList.innerHTML = '';
    elements.project1Desc.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        proj1DescList.appendChild(li);
    });

    // Projeto 2
    document.getElementById('project-2-title').innerHTML = elements.project2Title + ' <span class="project-tech" id="project-2-tech">' + elements.project2Tech + '</span>';
    document.getElementById('project-2-date').textContent = elements.project2Date;
    const proj2DescList = document.getElementById('project-2-desc');
    proj2DescList.innerHTML = '';
    elements.project2Desc.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        proj2DescList.appendChild(li);
    });

    // Projeto 3
    document.getElementById('project-3-title').innerHTML = elements.project3Title + ' <span class="project-tech" id="project-3-tech">' + elements.project3Tech + '</span>';
    document.getElementById('project-3-date').textContent = elements.project3Date;
    const proj3DescList = document.getElementById('project-3-desc');
    proj3DescList.innerHTML = '';
    elements.project3Desc.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        proj3DescList.appendChild(li);
    });

    // Educação
    document.getElementById('education-title').textContent = elements.education;
    document.getElementById('education-1-title').textContent = elements.educationTitle;
    document.getElementById('education-1-date').textContent = elements.educationDate;
    document.getElementById('education-1-degree').innerHTML = elements.educationDegree + ' | <span id="education-1-location">' + elements.educationLocation + '</span>';

    // Habilidades
    document.getElementById('skills-title').textContent = elements.skills;
    document.getElementById('skills-languages').textContent = elements.skillsLanguages;
    document.getElementById('skills-languages-desc').textContent = elements.skillsLanguagesDesc;
    document.getElementById('skills-tech').textContent = elements.skillsTech;
    document.getElementById('skills-tech-desc').textContent = elements.skillsTechDesc;
    document.getElementById('skills-tools').textContent = elements.skillsTools;
    document.getElementById('skills-tools-desc').textContent = elements.skillsToolsDesc;
    document.getElementById('skills-frameworks').textContent = elements.skillsFrameworks;
    document.getElementById('skills-frameworks-desc').textContent = elements.skillsFrameworksDesc;

    // Salvar o idioma no localStorage
    localStorage.setItem('language', currentLanguage);
}

// Função para alternar o idioma
function toggleLanguage() {
    const newLang = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLang);
}

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Alternar o atributo data-theme
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggleBtn.textContent = translations[currentLanguage].themeToggle;
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = translations[currentLanguage].themeToggle;
        localStorage.setItem('theme', 'dark');
    }
}

// Verificar preferência salva ao carregar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = translations[currentLanguage].themeToggle;
    } else {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = translations[currentLanguage].themeToggle;
    }
}

// Verificar o idioma do navegador e carregar o idioma salvo
function loadLanguage() {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language || navigator.userLanguage;
    
    // Se tiver idioma salvo, use-o, senão use o idioma do navegador
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        // Verificar se o navegador está em inglês
        if (browserLanguage.startsWith('en')) {
            currentLanguage = 'en';
        } else {
            currentLanguage = 'pt';
        }
    }
    
    changeLanguage(currentLanguage);
}

// Adicionar event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Carregar idioma
    loadLanguage();
    
    // Carregar tema salvo
    loadTheme();
    
    // Adicionar event listener ao botão de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleDarkMode);
    
    // Adicionar event listener ao botão de idioma
    const languageToggleBtn = document.getElementById('language-toggle');
    languageToggleBtn.addEventListener('click', toggleLanguage);
});