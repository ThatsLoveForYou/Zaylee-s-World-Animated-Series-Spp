// styles.js
import { StyleSheet, Dimensions } from "react-native";

const { width: SW } = Dimensions.get("window");
const H_PAD = 16;
const GAP = 14;
const COL_W = Math.floor((SW - H_PAD * 2 - GAP) / 2);

export const styles = StyleSheet.create({
  root: { flex: 1 },

  // Canvas
  canvas: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    overflow: "hidden",
  },
  sceneImage: { ...StyleSheet.absoluteFillObject, width: "100%", height: "100%" },
  nightOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(10,5,40,0.35)" },
  topRow: {
    position: "absolute",
    left: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  topLeftGroup: { flexDirection: "row", gap: 8 },
  iconBtn: { width: 34, height: 34, borderRadius: 17, alignItems: "center", justifyContent: "center" },
  sceneBadge: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  sceneBadgeText: { fontSize: 12, fontWeight: "700" },
  outfitBadge: { position: "absolute", bottom: 14, left: 14, paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 },
  outfitBadgeText: { fontSize: 12, fontWeight: "700", color: "#FFF" },
  dollImage: { width: SW * 0.58, height: SW * 0.6 },

  // Editor
  editor: {
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 10,
    paddingHorizontal: 16,
    marginTop: -24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  handle: { width: 40, height: 4, borderRadius: 2, alignSelf: "center", marginBottom: 10 },

  // Tabs
  tabRow: { flexDirection: "row", gap: 6, marginBottom: 10 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  tabText: { fontSize: 12, fontWeight: "700" },
  tabWithDot: { flexDirection: "row", alignItems: "center", gap: 4 },
  activeDot: { width: 6, height: 6, borderRadius: 3 },

  // Grid
  grid: { flex: 1 },
  gridContent: { flexDirection: "row", flexWrap: "wrap", gap: 8, paddingBottom: 8 },
  card: { borderRadius: 18, borderWidth: 2, padding: 8, alignItems: "center", position: "relative" },
  cardThumb: { width: "100%", aspectRatio: 1, borderRadius: 12, alignItems: "center", justifyContent: "center", marginBottom: 6 },
  thumbDoll: { width: "88%", height: "88%" },
  thumbScene: { width: "100%", height: "100%" },
  cardLabel: { fontSize: 11, fontWeight: "600" },
  checkBadge: { position: "absolute", top: 6, right: 6, width: 18, height: 18, borderRadius: 9, alignItems: "center", justifyContent: "center" },

  // Save
  saveBtn: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    gap: 8, paddingVertical: 16, borderRadius: 24, marginTop: 8,
    shadowColor: "#FF6EA7", shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35, shadowRadius: 8, elevation: 6,
  },
  saveBtnText: { color: "#FFF", fontSize: 16, fontWeight: "800", letterSpacing: 0.3 },
  
  // Header
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 14,
    paddingHorizontal: 16,
    gap: 10,
  },
  headerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: { flex: 1, alignItems: "center" },
  headerTitle: { color: "#FFF", fontSize: 18, fontWeight: "800", letterSpacing: 0.3 },
  headerSub: { color: "rgba(255,255,255,0.82)", fontSize: 12, marginTop: 2 },

  // Empty state
  emptyIcon: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  emptyTitle: { fontSize: 20, fontWeight: "800", marginBottom: 8 },
  emptyText: { fontSize: 14, textAlign: "center", lineHeight: 21, marginBottom: 22 },
  emptyBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 24,
  },
  emptyBtnTxt: { color: "#FFF", fontSize: 15, fontWeight: "800" },

  // Grid
  grid: { flexDirection: "row", flexWrap: "wrap", gap: GAP },
  cardOuter: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 7,
    paddingBottom: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 5,
  },
  cardArtWrap: {
    width: "100%",
    aspectRatio: 0.92,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  cardRemove: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FF6EA7",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  cardName: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 8,
  },

  // Shared art
  artDollWrap: { flex: 1, alignItems: "center", justifyContent: "flex-end" },

  // Detail modal
  detailBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  detailCard: {
    width: "100%",
    maxWidth: 380,
    borderRadius: 24,
    padding: 16,
    alignItems: "center",
  },
  detailArtOuter: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  detailArt: {
    width: "100%",
    aspectRatio: 0.9,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  detailName: { fontSize: 18, fontWeight: "800", marginTop: 16, textAlign: "center" },
  detailDate: { fontSize: 12, marginTop: 4 },
  detailBtnRow: { flexDirection: "row", gap: 12, marginTop: 18, width: "100%" },
  detailBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 13,
    borderRadius: 16,
  },
  detailBtnTxt: { fontSize: 15, fontWeight: "800" },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
});
