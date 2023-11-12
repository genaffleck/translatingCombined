// Array of objects
/* {
    q: `Simplify the expression \\(-3+7\\times 2 \\)`,
    options: [`\\(8\\)`, `\\(11\\)`, `\\(3\\)`, `\\(6\\)`],
    answer: 1,
  },
  {
    q: `Solve for \\(x\\) in \\(x^2+5x+6=0\\)`,
    options: [`\\(x=3,2\\)`, `\\(x=-3,-2\\)`, `\\(x=6,1\\)`, `\\(x=6,-1\\)`],
    answer: 1,
  },
  {
    q: `The quadratic equation is given by \\(x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}\\)`,
    options: ["true", "false"],
    answer: 0,
  },
  {
    q: `Simplify: \\(4^{\\frac{3}{2}}\\)`,
    options: [`\\(2\\)`, `\\(8\\)`, `\\(16\\)`, `\\(32\\)`],
    answer: 1,
  },
  {
    q: `What is \\(22+6\\)?`,
    options: [`\\(99\\)`, `\\(56\\)`, `\\(16\\)`, `\\(28\\)`],
    answer: 3,
  },
  {
    q: "How many squares are there in the following figure?",
    options: ["35", "30", "40", "50"],
    answer: 2,
    img: "img/square.jpg",
  },
  {
    q: "Count the triangles in the picture below.",
    options: ["7", "9", "12", "13"],
    answer: 3,
    img: "img/triangle.jpg",
  },
  {
    q: `Solve for \\(x\\)`,
    options: [`\\(7\\)`, `\\(9\\)`, `\\(12\\)`, `\\(13\\)`],
    answer: 3,
  }, */
const quiz = [
  {
    /* Combined Variation */
    q: `\\(x\\) varies directly as \\(y\\) and inversely as \\(z\\)`,
    options: [`\\(x=\\dfrac{ky}{z}\\)`, `\\(x=\\dfrac{kz}{y}\\)`, `\\(x=\\dfrac{k}{yz}\\)`, `\\(x=kyz\\)`],
    answer: 0,
  },
  {
    q: `\\(m\\) varies directly as the square of \\(n\\) and inversely as \\(p\\)`,
    options: [`\\(m=\\dfrac{kn}{p^2}\\)`, `\\(m=\\dfrac{kn}{p}\\)`, `\\(m=kn^2p\\)`, `\\(m=\\dfrac{kn^2}{p}\\)`],
    answer: 3,
  },
  {
    q: `\\(G\\) varies directly as the square of \\(E\\) and inversely as \\(F\\) `,
    options: [`\\(G=\\dfrac{kE}{F}\\)`, `\\(G=\\dfrac{kE^2}{F}\\)`, `\\(G=kE^2F\\)`, `\\(G=\\dfrac{k\\sqrt{E}}{F}\\)`],
    answer: 1,
  },
  {
    q: `\\(a\\) varies directly as the cube of \\(b\\) and inversely as the square of \\(c\\)`,
    options: [`\\(a=\\dfrac{kb^2}{c^3}\\)`, `\\(a=\\dfrac{k\\sqrt[3]{b}}{c^2}\\)`, `\\(a=\\dfrac{kb^3}{c^2}\\)`, `\\(a=\\dfrac{kb^3}{\\sqrt{c}}\\)`],
    answer: 2,
  },
  {
    q: `The time \\(T\\) in minutes taken for a stadium to empty varies directly as the number of spectators \\(S\\) and inversely as the number of open exits \\(E\\)`,
    options: [`\\(T=kSE\\)`, `\\(T=\\dfrac{k}{SE}\\)`, `\\(T=\\dfrac{kE}{S}\\)`, `\\(T=\\dfrac{kS}{E}\\)`],
    answer: 3,
  },
    // item # 6   
  {
    q: `\\(E\\) varies directly as the square of \\(F \\) and inversely as the square root of \\(G\\)`,
    options: [`\\(E=\\dfrac{kF^2}{\\sqrt{G}}\\)`, `\\(E=\\dfrac{k\\sqrt{F}}{G^2}\\)`, `\\(T=\\dfrac{kF^2}{G}\\)`, `\\(T=\\dfrac{kF^2}{\\sqrt[3]{G}}\\)`],
    answer: 0,
  },
  {
    q: `\\(y\\) varies jointly as \\(x\\) and \\(w\\) and inversely as the square of \\(z\\)`,
    options: [`\\(y=\\dfrac{kxw}{z^2}\\)`, `\\(y=\\dfrac{kxw}{\\sqrt{z}}\\)`, `\\(y=\\dfrac{kxz}{w^2}\\)`, `\\(y=\\dfrac{kwz}{x^2}\\)`],
    answer: 0,
  },
  {
    q: `\\(w\\) varies jointly as the fifth power of \\(u\\) and the square of \\(z\\) and inversely as \\(t\\)`,
    options: [`\\(w=\\dfrac{ku^5z^2}{t}\\)`, `\\(w=\\dfrac{ku^5z}{t}\\)`, `\\(w=\\dfrac{kuz^2}{t}\\)`, `\\(w=\\dfrac{ku^5z^2}{t^2}\\)`],
    answer: 0,
  },
  {
    q: `\\(m\\) varies jointly with \\(n\\) and the square of \\(q\\) and inversely as the square root of \\(r\\)`,
    options: [`\\(m=\\dfrac{knq}{\\sqrt{r}}\\)`, `\\(m=\\dfrac{knq^2}{r^2}\\)`, `\\(m=\\dfrac{knr^2}{\\sqrt{q}}\\)`, `\\(m=\\dfrac{knq^2}{\\sqrt{r}}\\)`],
    answer: 3,
  },
  {
    q: `The force \\(F\\) in Newtons needed to stop a train varies as the square of the speed \\(S\\) in
    kph of the train and inversely as the stopping distance \\(D\\) in metres.`,
    options: [`\\(F=\\dfrac{kS}{D}\\)`, `\\(F=\\dfrac{kS^2}{D}\\)`, `\\(F=\\dfrac{k\\sqrt{S}}{D}\\)`, `\\(F=\\dfrac{kD^2}{S}\\)`],
    answer: 1,
  },
    //  item # 11
  {
    q: `\\(A\\) varies directly as \\(M\\) and inversely as \\(J\\)`,
    options: [`\\(A=\\dfrac{kM^2}{J}\\)`, `\\(A=\\dfrac{kM}{J^2}\\)`, `\\(A=\\dfrac{kM}{J}\\)`, `\\(A=\\dfrac{kJ}{M}\\)`],
    answer: 2,
  },
  {
    q: `The gravitational force \\(F\\) between two objects varies jointly as the two objects  \\(m_1\\) and \\(m_2\\)  and inversely as the square of the  distance \\(d\\) between the two objects`,
    options: [`\\(F=\\dfrac{kd^2}{m_1m_2}\\)`, `\\(F=\\dfrac{km_1}{m_2d^2}\\)`, `\\(F=\\dfrac{km_1m_2}{d^2}\\)`, `\\(F=\\dfrac{km_1m_2}{d}\\)`],
    answer: 2,
  },
  {
    q: `The centrifugal force \\(F\\) of a body moving in a circle varies
    jointly with the radius \\(r\\) of the circular path and the body's mass \\(m\\), and
    inversely with the square of the time \\(t\\) it takes to move about one full
    circle.`,
    options: [`\\(F=\\dfrac{krm}{t^2}\\)`, `\\(F=\\dfrac{kr^2m}{t^2}\\)`, `\\(F=\\dfrac{krm}{\\sqrt{t}}\\)`, `\\(F=\\dfrac{krm}{t}\\)`],
    answer: 0,
  },
  {
    q: `\\(L\\) is directly proportional to the cube of \\(M\\) and inversely proportional to the square root of \\(W\\)`,
    options: [`\\(L=\\dfrac{kM^3}{W^2}\\)`, `\\(L=\\dfrac{kM^3}{\\sqrt{W}}\\)`, `\\(L=\\dfrac{k\\sqrt[3]{M}}{\\sqrt{W}}\\)`, `\\(L=\\dfrac{k\\sqrt[3]{M}}{W^2}\\)`],
    answer: 1,
  },
  {
    q: `The volume \\(V\\) of a fixed amount of gas varies directly as the temperature \\(T\\) and inversely as the pressure \\(P\\)`,
    options: [`\\(V=\\dfrac{kT}{P}\\)`, `\\(V=\\dfrac{kP}{T}\\)`, `\\(V=\\dfrac{k}{TP}\\)`, `\\(V=\\dfrac{kT}{P^2}\\)`],
    answer: 0,
  },
   //  item # 16
/*   {
    q: `The volume \\(V\\) of a fixed amount of gas varies directly as the temperature \\(T\\) and inversely as the pressure \\(P\\)`,
    options: [`\\(V=\\dfrac{kT}{P}\\)`, `\\(V=\\dfrac{kP}{T}\\)`, `\\(V=\\dfrac{k}{TP}\\)`, `\\(V=\\dfrac{kT}{P^2}\\)`],
    answer: 0,
  }, */
];
