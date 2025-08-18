export interface ChapterNote {
  chapterId: number;
  title: string;
  content: string;
}

export const chapterNotes: ChapterNote[] = [
  {
    chapterId: 1,
    title: "Number and Algebra",
    content: `# Number and Algebra

## Overview
This chapter covers fundamental concepts in number theory and algebraic manipulation, essential for IB Mathematics AI Higher Level.

## Key Concepts

### Scientific Notation
Operations with numbers in the form $a \\times 10^k$ where $1 \\leq a < 10$ and $k \\in \\mathbb{Z}$.

**Example:**
- $3.45 \\times 10^6 = 3,450,000$
- $7.2 \\times 10^{-3} = 0.0072$

### Arithmetic Sequences
A sequence where consecutive terms have a constant difference $d$.

**Formula for nth term:** $a_n = a_1 + (n-1)d$

**Sum of first n terms:** $S_n = \\frac{n}{2}[2a_1 + (n-1)d]$

### Geometric Sequences  
A sequence where consecutive terms have a constant ratio $r$.

**Formula for nth term:** $a_n = a_1 \\cdot r^{n-1}$

**Sum of first n terms:** $S_n = a_1 \\cdot \\frac{1-r^n}{1-r}$ (when $r \\neq 1$)

### Complex Numbers (AHL)
Complex numbers in the form $z = a + bi$ where $i^2 = -1$.

**Key Properties:**
- Real part: $\\text{Re}(z) = a$
- Imaginary part: $\\text{Im}(z) = b$
- Modulus: $|z| = \\sqrt{a^2 + b^2}$
- Argument: $\\arg(z) = \\arctan(\\frac{b}{a})$

**Polar Form:** $z = r(\\cos \\theta + i \\sin \\theta) = r \\cdot \\text{cis} \\theta$

**Exponential Form:** $z = re^{i\\theta}$

### Matrices (AHL)
Matrix operations and properties:

**Matrix Multiplication:** $(AB)_{ij} = \\sum_{k} A_{ik}B_{kj}$

**Determinant (2×2):** $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$

**Inverse (2×2):** $A^{-1} = \\frac{1}{\\det(A)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$

**Eigenvalues and Eigenvectors:**
If $A\\vec{v} = \\lambda\\vec{v}$, then $\\lambda$ is an eigenvalue and $\\vec{v}$ is an eigenvector.

## Practice Problems

1. Express $0.000456$ in scientific notation.
2. Find the 15th term of the arithmetic sequence: $3, 7, 11, 15, ...$
3. Calculate the sum of the first 10 terms of the geometric sequence: $2, 6, 18, 54, ...$
4. Convert $z = 3 + 4i$ to polar form.

## Applications
- Financial calculations (compound interest)
- Population models
- Signal processing (complex numbers)
- Computer graphics (matrices)`
  },
  {
    chapterId: 2,
    title: "Functions",
    content: `# Functions

## Overview
Functions are fundamental mathematical objects that describe relationships between variables.

## Key Concepts

### Function Notation
A function $f$ maps elements from domain $D$ to range $R$: $f: D \\to R$

**Standard notation:** $y = f(x)$, $v = f(t)$, $C = f(n)$

### Linear Functions
**General form:** $y = mx + c$
- $m$ = gradient (slope)
- $c$ = y-intercept

**Alternative forms:**
- $ax + by + d = 0$ (general form)
- $y - y_1 = m(x - x_1)$ (point-slope form)

### Function Properties
- **Domain:** Set of all possible input values
- **Range:** Set of all possible output values
- **Inverse function:** $f^{-1}(x)$ where $f(f^{-1}(x)) = x$

### Transformations (AHL)
For function $f(x)$:

**Translations:**
- $f(x) + b$: vertical translation by $b$ units
- $f(x - a)$: horizontal translation by $a$ units

**Reflections:**
- $-f(x)$: reflection in x-axis
- $f(-x)$: reflection in y-axis

**Stretches:**
- $pf(x)$: vertical stretch by factor $p$
- $f(qx)$: horizontal stretch by factor $\\frac{1}{q}$

### Exponential Models (AHL)
**Half-life model:** $N(t) = N_0 \\cdot (\\frac{1}{2})^{\\frac{t}{t_{1/2}}}$

**Natural logarithmic model:** $f(x) = a + b \\ln x$

### Sinusoidal Models (AHL)
**General form:** $f(x) = a \\sin(bx - c) + d$
- Amplitude: $|a|$
- Period: $\\frac{2\\pi}{b}$
- Phase shift: $\\frac{c}{b}$
- Vertical shift: $d$

## Graphical Analysis

### Composite Functions
$(f \\circ g)(x) = f(g(x))$

**Key identity:** $f \\circ f^{-1}(x) = f^{-1} \\circ f(x) = x$

### Logarithmic Scaling
Used for handling very large or small numbers:
- **Semi-log plot:** One axis logarithmic
- **Log-log plot:** Both axes logarithmic

**Linearization:** Transform exponential/power relationships into linear ones for parameter estimation.

## Practice Problems

1. Find the inverse of $f(x) = 2x + 3$
2. Describe the transformation from $f(x) = x^2$ to $g(x) = -2f(x+1) + 3$
3. A sinusoidal function has amplitude 5, period $4\\pi$, and passes through $(0, 2)$. Find its equation.
4. Use logarithmic scaling to linearize $y = ax^b$

## Applications
- Modeling periodic phenomena (tides, sound waves)
- Population growth and decay
- Economic functions (supply, demand)
- Signal processing`
  },
  {
    chapterId: 3,
    title: "Geometry and Trigonometry",
    content: `# Geometry and Trigonometry

## Overview
This chapter explores geometric relationships in 2D and 3D spaces, with emphasis on trigonometric applications.

## Key Concepts

### 3D Geometry
**Distance formula:** $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$

**Midpoint formula:** $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)$

### Volume and Surface Area
**Right pyramid:** $V = \\frac{1}{3} \\times \\text{base area} \\times \\text{height}$

**Right cone:** $V = \\frac{1}{3}\\pi r^2 h$, $SA = \\pi r^2 + \\pi r l$

**Sphere:** $V = \\frac{4}{3}\\pi r^3$, $SA = 4\\pi r^2$

### Trigonometry in Right Triangles
**Basic ratios:**
- $\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$
- $\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$
- $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$

### Non-Right Triangle Trigonometry

**Sine Rule:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$

**Cosine Rule:** 
- $c^2 = a^2 + b^2 - 2ab \\cos C$
- $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$

**Area formula:** $\\text{Area} = \\frac{1}{2}ab \\sin C$

### Circle Geometry
**Arc length:** $s = r\\theta$ (in radians)
**Sector area:** $A = \\frac{1}{2}r^2\\theta$ (in radians)

### Radian Measure (AHL)
**Conversion:** $\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$

**Unit circle definitions:**
- $\\sin \\theta$ = y-coordinate
- $\\cos \\theta$ = x-coordinate
- $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$

**Pythagorean identity:** $\\sin^2 \\theta + \\cos^2 \\theta = 1$

### Voronoi Diagrams
**Components:**
- **Sites:** Points that define regions
- **Vertices:** Points equidistant from three or more sites
- **Edges:** Boundaries between regions
- **Cells:** Regions around each site

**Applications:** Nearest-neighbor interpolation, facility location problems

### Graph Theory (AHL)
**Basic concepts:**
- **Vertices:** Points in the graph
- **Edges:** Connections between vertices
- **Degree:** Number of edges connected to a vertex

**Types of graphs:**
- **Simple graph:** No multiple edges or loops
- **Complete graph:** Every pair of vertices connected
- **Weighted graph:** Edges have associated weights
- **Directed graph:** Edges have direction

**Adjacency matrix:** Matrix $A$ where $A_{ij} = 1$ if vertices $i$ and $j$ are connected.

**Walks and paths:** $A^k$ gives number of k-length walks between vertices.

### Algorithms (AHL)

**Minimum Spanning Tree (MST):**
- **Kruskal's algorithm:** Sort edges, add shortest that doesn't create cycle
- **Prim's algorithm:** Start from vertex, always add shortest edge to tree

**Chinese Postman Problem:** Find shortest route that visits every edge at least once.

**Traveling Salesman Problem (TSP):**
- **Nearest-neighbor:** Greedy approach (upper bound)
- **Deleted-vertex:** Removes vertex to find lower bound

## Practice Problems

1. Find the distance between points $(1, 2, 3)$ and $(4, 6, 8)$ in 3D space.
2. A triangle has sides $a = 8$, $b = 10$, and angle $C = 60°$. Find side $c$.
3. Convert $150°$ to radians.
4. Find the area of a sector with radius 5 cm and central angle $\\frac{2\\pi}{3}$ radians.

## Applications
- Navigation and GPS systems
- Computer graphics and 3D modeling
- Architecture and engineering
- Network optimization
- Geographic information systems (GIS)`
  },
  {
    chapterId: 4,
    title: "Statistics and Probability",
    content: `# Statistics and Probability

## Overview
This chapter covers data analysis, probability theory, and statistical inference methods.

## Key Concepts

### Data Types and Collection
**Population vs Sample:**
- **Population:** Entire group being studied
- **Sample:** Subset of population
- **Random sample:** Each member has equal chance of selection

**Data types:**
- **Discrete:** Countable values (number of students)
- **Continuous:** Measurable values (height, weight)

### Probability Fundamentals

**Basic probability:** $P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$

**Combined events:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$

**Conditional probability:** $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$

**Independent events:** $P(A \\cap B) = P(A) \\times P(B)$

### Discrete Random Variables
**Expected value:** $E[X] = \\sum x_i P(X = x_i)$

**Variance:** $\\text{Var}(X) = E[X^2] - (E[X])^2$

### Binomial Distribution
For $n$ independent trials with probability $p$ of success:

$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$

**Mean:** $\\mu = np$
**Variance:** $\\sigma^2 = np(1-p)$

### Normal Distribution
**Standard form:** $X \\sim N(\\mu, \\sigma^2)$

**Empirical rule (68-95-99.7):**
- 68% of data within 1 standard deviation
- 95% of data within 2 standard deviations  
- 99.7% of data within 3 standard deviations

**Z-score:** $z = \\frac{x - \\mu}{\\sigma}$

### Hypothesis Testing
**Null hypothesis:** $H_0$ (status quo)
**Alternative hypothesis:** $H_1$ (what we're testing for)

**Significance level:** $\\alpha$ (probability of Type I error)
**p-value:** Probability of observing data if $H_0$ is true

**Decision rule:** Reject $H_0$ if p-value $< \\alpha$

### Chi-Square Tests
**Test of independence:** Tests if two categorical variables are independent

$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$

where $O$ = observed frequency, $E$ = expected frequency

**Degrees of freedom:** $df = (r-1)(c-1)$ for $r \\times c$ table

**Goodness of fit:** Tests if data follows specified distribution

### t-Test
Used when population standard deviation is unknown:

**One-sample t-test:** $t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$

**Two-sample t-test:** $t = \\frac{\\bar{x_1} - \\bar{x_2}}{s_p\\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}$

### Advanced Topics (AHL)

**Confidence Intervals:**
- **For mean (σ known):** $\\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$
- **For mean (σ unknown):** $\\bar{x} \\pm t_{\\alpha/2} \\frac{s}{\\sqrt{n}}$

**Poisson Distribution:**
Models rare events: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$

**Mean = Variance = λ**

**Type I and Type II Errors:**
- **Type I:** Reject true $H_0$ (probability = $\\alpha$)
- **Type II:** Accept false $H_0$ (probability = $\\beta$)

**Markov Chains:**
**Transition matrix:** $T$ where $T_{ij}$ = probability of moving from state $i$ to state $j$

**State after n steps:** $s_n = T^n s_0$

**Steady state:** Found by solving $Tv = v$ where $v$ is eigenvector for eigenvalue 1

## Practice Problems

1. A bag contains 5 red and 3 blue balls. Find $P(\\text{red then blue without replacement})$.
2. For $X \\sim B(20, 0.3)$, find $P(X = 5)$.
3. A normal distribution has $\\mu = 100$, $\\sigma = 15$. Find $P(85 < X < 115)$.
4. Test if a coin is fair given 12 heads in 20 tosses (use $\\alpha = 0.05$).

## Applications
- Quality control in manufacturing
- Medical testing and diagnosis
- Market research and polling
- Risk assessment in finance
- A/B testing in technology`
  },
  {
    chapterId: 5,
    title: "Calculus",
    content: `# Calculus

## Overview
Calculus provides tools for analyzing rates of change and accumulation, fundamental to mathematical modeling.

## Key Concepts

### Limits and Derivatives
**Limit definition:** $\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

**Derivative as rate of change:** $f'(x) = \\frac{dy}{dx}$

**Geometric interpretation:** Slope of tangent line at point $(x, f(x))$

### Basic Differentiation Rules

**Power rule:** $\\frac{d}{dx}[x^n] = nx^{n-1}$

**Constant rule:** $\\frac{d}{dx}[c] = 0$

**Sum rule:** $\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$

### Function Analysis
**Increasing/decreasing:**
- $f'(x) > 0$: function increasing
- $f'(x) < 0$: function decreasing  
- $f'(x) = 0$: stationary point

**Critical points:** Where $f'(x) = 0$ or $f'(x)$ undefined

### Advanced Differentiation (AHL)

**Trigonometric derivatives:**
- $\\frac{d}{dx}[\\sin x] = \\cos x$
- $\\frac{d}{dx}[\\cos x] = -\\sin x$
- $\\frac{d}{dx}[\\tan x] = \\sec^2 x$

**Exponential and logarithmic:**
- $\\frac{d}{dx}[e^x] = e^x$
- $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$

**Chain rule:** $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$

**Product rule:** $\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

**Quotient rule:** $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

### Second Derivatives
**Notation:** $f''(x) = \\frac{d^2y}{dx^2}$

**Concavity:**
- $f''(x) > 0$: concave up
- $f''(x) < 0$: concave down
- $f''(x) = 0$: possible inflection point

**Second derivative test:**
- If $f'(c) = 0$ and $f''(c) > 0$: local minimum
- If $f'(c) = 0$ and $f''(c) < 0$: local maximum

### Integration

**Indefinite integral:** $\\int f(x) dx = F(x) + C$ where $F'(x) = f(x)$

**Basic integration rules:**
- $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$)
- $\\int \\frac{1}{x} dx = \\ln|x| + C$
- $\\int e^x dx = e^x + C$
- $\\int \\sin x dx = -\\cos x + C$
- $\\int \\cos x dx = \\sin x + C$
- $\\int \\sec^2 x dx = \\tan x + C$

**Definite integral:** $\\int_a^b f(x) dx = F(b) - F(a)$

### Integration Techniques (AHL)

**Integration by substitution:**
For $\\int f(g(x)) g'(x) dx$, let $u = g(x)$

**Examples:**
- $\\int \\sin(2x+5) dx = -\\frac{1}{2}\\cos(2x+5) + C$
- $\\int \\frac{dx}{3x+2} = \\frac{1}{3}\\ln|3x+2| + C$
- $\\int 4x \\sin(x^2) dx = -2\\cos(x^2) + C$

### Applications of Integration

**Area under curve:** $A = \\int_a^b f(x) dx$

**Volume of revolution:**
- About x-axis: $V = \\pi \\int_a^b [f(x)]^2 dx$
- About y-axis: $V = \\pi \\int_a^b [g(y)]^2 dy$

### Differential Equations (AHL)

**First-order DE:** $\\frac{dy}{dx} = f(x,y)$

**Slope fields:** Visual representation showing solution directions

**Euler's method:** Numerical approximation
$y_{n+1} = y_n + h \\cdot f(x_n, y_n)$

**Linear systems:** 
$\\frac{dx}{dt} = ax + by$
$\\frac{dy}{dt} = cx + dy$

**Phase portraits:** Show solution trajectories in the xy-plane

**Equilibrium points:** Where both $\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} = 0$

**Stability analysis:** Based on eigenvalues of coefficient matrix:
- Real, negative: stable node
- Real, positive: unstable node  
- Complex with negative real part: stable spiral
- Complex with positive real part: unstable spiral
- Real, opposite signs: saddle point

**Second-order DEs:** $\\frac{d^2x}{dt^2} + a\\frac{dx}{dt} + bx = 0$

Can be converted to system of first-order DEs

## Practice Problems

1. Find $\\frac{dy}{dx}$ for $y = x^3 \\sin(2x)$
2. Determine intervals where $f(x) = x^3 - 3x^2 + 2$ is increasing
3. Evaluate $\\int_0^{\\pi/2} \\sin^2 x \\cos x dx$
4. Find the volume when $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is rotated about the x-axis
5. Use Euler's method to approximate $y(0.2)$ for $\\frac{dy}{dx} = x + y$, $y(0) = 1$, with $h = 0.1$

## Applications
- Physics: motion, forces, energy
- Economics: marginal analysis, optimization
- Biology: population dynamics, epidemiology
- Engineering: control systems, signal processing
- Data science: optimization algorithms`
  }
];

export const getChapterNote = (chapterId: number): ChapterNote | null => {
  return chapterNotes.find(note => note.chapterId === chapterId) || null;
};