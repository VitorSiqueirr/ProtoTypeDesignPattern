export default interface IShape {
    clone(): IShape;
    toString(): string;
    area(): void;
}