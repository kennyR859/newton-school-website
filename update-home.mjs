import fs from 'fs';

let content = fs.readFileSync('./src/app/components/Home.tsx', 'utf8');

// Update the Hero section to fix Korean text breaking
const oldHero = `            <Typography variant="overline" color="copper" className="mb-6 block">
              Premium Education in Fort Lee
            </Typography>
            <Typography variant="h1" color="white" className="mb-6 max-w-4xl mx-auto">
              원리를 이해하면<br className="md:hidden"/> 모든 것이 쉬워집니다
            </Typography>
            <Typography variant="body-large" color="white" className="mb-10 max-w-2xl mx-auto opacity-90">
              단순 암기가 아닌 깊이 있는 이해를 통해<br className="md:hidden"/> 아이들의 진짜 실력을 키우는 Newton School입니다.
            </Typography>`;

const newHero = `            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-copper/20 border border-copper/40 backdrop-blur-sm mb-6"
            >
              <GraduationCap size={16} className="text-copper" />
              <span className="text-copper text-sm font-medium tracking-wider uppercase">Premium Education in Fort Lee</span>
            </motion.div>
            
            {/* Main Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
              원리를 이해하면
              <br />
              <span className="text-copper">모든 것이 쉬워집니다</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              단순 암기가 아닌 깊이 있는 이해를 통해 아이들의 진짜 실력을 키우는 Newton School입니다.
            </p>`;

content = content.replace(oldHero, newHero);

// Add trust indicators
const oldCTA = `            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/curriculum">
                <Button variant="accent" size="lg">Explore Curriculum</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>`;

const newCTA = `            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/curriculum">
                <Button variant="accent" size="lg">Explore Curriculum</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 pt-8 mt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading text-copper font-bold">500+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading text-copper font-bold">95%</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading text-copper font-bold">15+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Years</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>`;

content = content.replace(oldCTA, newCTA);

// Update background gradient
content = content.replace(
  '<div className="absolute inset-0 bg-charcoal/60" />',
  '<div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />'
);

// Update min-height
content = content.replace('min-h-[600px]', 'min-h-[700px]');

fs.writeFileSync('./src/app/components/Home.tsx', content, 'utf8');
console.log('Home.tsx updated successfully!');
