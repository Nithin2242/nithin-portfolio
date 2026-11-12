
                  {/* 4. D-Mart Sales Dashboard */}
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={dashboardData} />
                    </div>
                    <div>
                      <p className="text-zinc-500 font-mono text-sm mb-4">04 // DATA ANALYTICS</p>
                      <h3 className="text-4xl font-bold text-white mb-6">D-Mart Sales Dashboard</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        Interactive Power BI dashboard transforming raw retail sales data into visual insights. Tracks revenue, inventory turnover, and store performance to drive data-informed business decisions.
                      </p>
                       <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><FaChartBar /> Power BI</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><FaFileExcel /> Excel</span>
                      </div>
                    </div>
                  </div>

                  {/* 5. Cyber Sentinel */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <p className="text-zinc-500 font-mono text-sm mb-4">05 // MOBILE & SECURITY</p>
                      <h3 className="text-4xl font-bold text-white mb-6">Cyber Sentinel</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        A robust mobile application focused on cybersecurity education and threat monitoring. Built with Flutter to deliver a seamless, cross-platform user experience.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiFlutter /> Flutter</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10">Dart</span>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={cyberSentinelData} />
                    </div>
                  </div>

                </motion.div>
              )}

              {/* CERTIFICATES GRID */}
              {activeTab === "certificates" && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {certificates.map((cert) => (
                    <div key={cert.id} className="rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 group cursor-pointer shadow-lg hover:shadow-2xl">
                      <div className="h-56 w-full bg-white/5 relative overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-105 filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-500" 
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">{cert.title}</h3>
                        <div className="flex justify-between items-center text-xs font-mono text-zinc-500 tracking-wider">
                          <span className="uppercase">{cert.issuer}</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

            </AnimatePresence>
          </section>

          {/* Contact Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="border-t border-white/10 pt-16 pb-16"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white mb-6">LET'S CONNECT</h2>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              </p>
              <div className="flex justify-center gap-6">
                <a href="mailto:nithinns1402@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center gap-3">
                  <FaEnvelope size={20} />
                  <span className="hidden md:block font-mono text-sm tracking-wider">EMAIL</span>
                </a>
                <a href="https://www.linkedin.com/in/nithin-n-s-23b3ba290/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center gap-3">
                  <FaLinkedin size={20} />
                  <span className="hidden md:block font-mono text-sm tracking-wider">LINKEDIN</span>
                </a>
                <a href="https://github.com/Nithin2242" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center gap-3">
                  <FaGithub size={20} />
                  <span className="hidden md:block font-mono text-sm tracking-wider">GITHUB</span>
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}
