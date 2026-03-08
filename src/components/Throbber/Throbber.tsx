import { Hexagon, Hexagons, HexBorder, ModalBack } from './Throbber.styles';

export const Throbber = () => {
  return (
    <ModalBack>
      <HexBorder>
        <Hexagons>
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
          <Hexagon />
        </Hexagons>
      </HexBorder>
    </ModalBack>
  );
};
