module.exports = {
  async rewrites() {
    return [
      {
        source: "/places/:name",
        destination: "/places/[name]",
      },
    ]
  },
}
