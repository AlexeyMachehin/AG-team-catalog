class LikesUtils {
  private static readonly localStorageKey = 'userLikes';

  private getUserLikes(): Set<number> {
    const likesData = localStorage.getItem(LikesUtils.localStorageKey);
    return likesData ? new Set(JSON.parse(likesData)) : new Set();
  }

  private setUserLikes(likes: Set<number>): void {
    localStorage.setItem(
      LikesUtils.localStorageKey,
      JSON.stringify(Array.from(likes)),
    );
  }

  likeUser(id: number): void {
    const likes = this.getUserLikes();
    if (!likes.has(id)) {
      likes.add(id);
      this.setUserLikes(likes);
    }
  }

  unlikeUser(id: number): void {
    const likes = this.getUserLikes();
    if (likes.has(id)) {
      likes.delete(id);
      this.setUserLikes(likes);
    }
  }

  isUserLiked(id: number): boolean {
    const likes = this.getUserLikes();
    return likes.has(id);
  }
}

export const likesUtils = new LikesUtils();
