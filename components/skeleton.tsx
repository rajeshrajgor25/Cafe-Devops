'use client'

export function SkeletonCard() {
  return (
    <div className="glass dark:glass-card-dark p-6 rounded-2xl space-y-3 animate-pulse">
      <div className="h-6 bg-white/20 dark:bg-white/10 rounded-lg w-2/3"></div>
      <div className="h-4 bg-white/20 dark:bg-white/10 rounded-lg"></div>
      <div className="h-4 bg-white/20 dark:bg-white/10 rounded-lg w-5/6"></div>
      <div className="h-10 bg-white/20 dark:bg-white/10 rounded-lg mt-4"></div>
    </div>
  )
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
