const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    }
class Index extends React.Component {
    
    render() {
        const {pokemons} = this.props
        return (
        <div>
            <div style={myStyle}>My First React Component!</div>
            <h1>See All the Pokemon</h1>
            <ol>
                {pokemons.map((pokemon, i) => {
                  return (  <li key = {i}> <a href={`/pokemon/${i}/`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a></li>)
                })}
            </ol>
        </div>
        )
    }
}
module.exports = Index