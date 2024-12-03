import "./App.css";

const cards = {
display: 'flex',
margin: '20px 20px 20px 20px',
padding: '15px 50px',
gap: '20px',
}

const frontend = {
  color: 'white',
  fontsize: '50pt',
  backgroundColor: 'red',
  borderRadius: '5px',
  padding: '15px 50px',
};

const backend = {
  color: 'black',
  fontsize: '50pt',
  backgroundColor: 'yellow',
  borderRadius: '5px',
  padding: '15px 50px',

};

const comfortStyle = {
  color: 'white',
  fontsize: '50pt',
  backgroundColor: 'teal',
  borderRadius: '5px',
  padding: '15px 50px',

  };

const App = () => {
  const skills = { text: "Learn something new", frontEnd: true };
  const mySkills = [
    {
      name: "JavaScript",
      comfort: 8,
      frontEnd: true,
      backend: true,
    },
    {
      name: "CSS",
      comfort: 9,
      frontEnd: true,
      backend: false,
    },
    {
      name: "HTML",
      comfort: 9,
      frontEnd: true,
      backend: false,
    },
    {
      name: "React/JSX",
      comfort: 5,
      frontEnd: false,
      backend: false,
    },
  ];
  return (
    < >
    
      <h1>My Skills:</h1>
      <div style={cards}>
      {/* <p>{skills.text}</p> */}
      <ul style={frontend}>
      <h3>Frontend:</h3>

        {mySkills.map((skills, index) => (
          <p key={index}>
            {skills.frontEnd ? ` FrontEnd Completed - ${skills.name}` : `Working on it - ${skills.name}`}
          </p>
        ))}
      </ul>
      <ul style={backend}>
      <h3>Backend:</h3>

        {mySkills.map((skills, index) =>
        <p key={index}>
         {skills.backend ? ` Backend Completed - ${skills.name}` : `Working on it - ${skills.name}`}
        
     </p>
    )}
      </ul>
      <div>
        <ul style={comfortStyle}>
           <h3>Comfort Level:</h3>
           {mySkills.map((skills) => (
           
        <p>{skills.name} - {skills.comfort}</p> 
      ))}
      </ul>
      </div>
      </div>
    </>
  );
};

export default App;
