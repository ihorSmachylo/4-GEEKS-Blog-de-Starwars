const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
			favorites: [],
            persons:[],
            selectPerson:[]
		},
		actions: {
            getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },
			getPlanets: async () => {
                const store = getStore();
                if (localStorage.getItem("planets") === null) {
                    const response = await fetch(`https://swapi.dev/api/planets`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ planets: responseJSON.results, });

                    localStorage.setItem(`planets`, JSON.stringify(store.planets));
                    let storage = localStorage.getItem("planets");
                } else {
                    setStore({ planets: JSON.parse(localStorage.getItem("planets")), });
                }
            },
            getPerson: (person) => {setStore({selectPerson: person}); },
            getPersons: async () =>{
                const store = getStore();
                if (localStorage.getItem('persons') === null) {
                    const response = await fetch("https://www.swapi.tech/api/people/",{
                    method : "GET",
                    ContentType: "application/json",
                    });
                    const responseJSON = await response.json();
                    setStore({persons: responseJSON.results,});
                    localStorage.setItem('persons',JSON.stringify(store.persons));
                    let storage = localStorage.getItem('persons');
                }else {
                    setStore({persons: JSON.parse(localStorage.getItem('persons')), });
                }
            },
            // ADD favorite en action metodos de array
            // DELETE favorite de action metodos de array
		}
    
         
	};
};

export default getState;
