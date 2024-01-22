import GetColorType, { err_style, data_style, name_style } from './style-Card';
import PokemonBallImg from '../pokeImg/pokeImg.tsx';
import {CardProps} from"../../types/CardProps.ts"


interface PokeDataProps {
  color: string;
  id: string;
  text: string;
  set: string|number| JSX.Element;
}

export default function Card(props: CardProps): JSX.Element {
  function PokeData(props: PokeDataProps) {
    const SewDataStyle = { ...data_style, background: props.color };
    return (<li style={SewDataStyle} id={props.id}>{props.text + ' '}{props.set}</li>);
  }

  return (
    <div>
      <p style={err_style} id='err-or-search'>{props.error}</p>
      <ul>
        <h2 id="name_poke" style={name_style}>{props.pokemon.name} - #{props.pokemon.number}</h2>
        <PokemonBallImg Gif={props.pokemon.gif} Img={props.pokemon.img} alt={`pokemon:\n ${props.pokemon.name}`} isAnimated={false} />
        <PokeData id="abilities" text={"ABILITIES:"} color='#A34FB8' set={props.pokemon.powers}></PokeData>
        <PokeData id="type" text='TYPE:' color='#9d7373' set={GetColorType(props.pokemon.type)}></PokeData>
        <PokeData id="hp" text='BASE HEALTH(HP): ' color='#c26c21' set={props.pokemon.hp}></PokeData>
        <PokeData id="speed" text="SPEED:" color='#94861b' set={props.pokemon.speed}></PokeData>
        <PokeData id="attack" text='ATTACK:' color='#800f2b' set={props.pokemon.attack}></PokeData>
        <PokeData id="defense" text="DEFENSE: " color='#21c25f' set={props.pokemon.defense}></PokeData>
      </ul>
    </div>
  );
}
