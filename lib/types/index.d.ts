export type JWT = `Bearer ${string}`;
export type TEnvKey = `NEXT_PUBLIC_${string}`;

export type Function<P = unknown, R = unknown> = (props: P) => R;
export type AsyncFunction<P = unknown, R = unknown> = Function<P, Promise<R>>;
