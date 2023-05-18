# 당근마켓 클론코딩

- https://nomadcoders.co/carrot-market
- 위의 강의를 들으면서 Next.js 13, React 18로 맞춰서 코딩해본다.

## 기술스택

- Next.js : 13
- React : 18
- Tailwind : 3
- Icons: HeroIcons
- ORM + Database : Prisma + PlanetScale Vitess (mysql compatible)

### Todos

- 레이아웃을 재사용하고 있지만 `layout.tsx`의 활용성이 조금 떨어진다

  - 다형성이 지원된다면 각 페이지마다 인터페이스를 구현하고 그 값을 `layout.tsx`에서 끌어다 쓸 수 있을까?

- 추가적인 컴포넌트화 필요
  - input 등..
