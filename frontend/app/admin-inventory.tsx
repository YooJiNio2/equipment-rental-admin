import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const INVENTORY_DATA = [
  { id: '1', name: '아두이노 키트 01', status: 'AVAILABLE', statusKor: '대여 가능', user: '-', color: '#00C853' },
  { id: '2', name: '맥북에어 05', status: 'RENTED', statusKor: '대여 중', user: '이영희', color: '#2E5BFF' },
  { id: '3', name: '라즈베리 파이 02', status: 'BROKEN', statusKor: '파손', user: '-', color: '#FF9800' },
  { id: '4', name: '보조배터리 03', status: 'LOST', statusKor: '분실', user: '-', color: '#6C757D' },
  { id: '5', name: '그램 01', status: 'OVERDUE', statusKor: '연체', user: '박철수', color: '#FF4D4D' },
  { id: '6', name: '라즈베리 파이 01', status: 'PARTIAL_LOST', statusKor: '부분 분실', user: '조현민', color: '#FD7E14' },
];

export default function AdminInventoryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>기자재 상태 관리</Text>
        <TouchableOpacity>
          <Text style={styles.addText}>추가</Text>
        </TouchableOpacity>
      </View>

      {/* 필터 탭 - DB 상태 종류에 맞춰 확장 */}
      <View style={styles.filterRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.filterChip, styles.filterActive]}>
            <Text style={styles.filterActiveText}>전체</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}><Text>대여 중</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}><Text>대여 가능</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}><Text>연체</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}><Text>파손/분실</Text></TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        {INVENTORY_DATA.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View style={styles.itemMain}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemUser}>현재 사용자: {item.user}</Text>
              </View>
              {/* 상태 배지 - 배경색 투명도 조절로 깔끔하게 표시 */}
              <View style={[styles.statusBadge, { backgroundColor: item.color + '20' }]}>
                <Text style={[styles.statusText, { color: item.color }]}>{item.statusKor}</Text>
              </View>
            </View>
            
            <View style={styles.itemFooter}>
              <TouchableOpacity style={styles.subBtn}><Text style={styles.subBtnText}>이력 보기</Text></TouchableOpacity>
              {/* 상태 변경 버튼 - 파손/분실 로그 작성을 위한 용도 */}
              <TouchableOpacity style={styles.subBtn}><Text style={styles.subBtnText}>상태 변경</Text></TouchableOpacity>
              <TouchableOpacity style={styles.subBtn}><Text style={[styles.subBtnText, {color: '#FF4D4D'}]}>파손/분실 등록</Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20, backgroundColor: 'white' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  backText: { fontSize: 24, color: '#333' },
  addText: { color: '#2E5BFF', fontWeight: 'bold' },
  filterRow: { flexDirection: 'row', padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#EEE' },
  filterChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, backgroundColor: '#F1F3F5', marginRight: 8 },
  filterActive: { backgroundColor: '#2E5BFF' },
  filterActiveText: { color: 'white', fontWeight: 'bold' },
  content: { padding: 15 },
  itemCard: { backgroundColor: 'white', borderRadius: 12, padding: 15, marginBottom: 12, elevation: 2 },
  itemMain: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A' },
  itemUser: { fontSize: 13, color: '#777', marginTop: 4 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  statusText: { fontSize: 12, fontWeight: 'bold' },
  itemFooter: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#F8F9FA', paddingTop: 10 },
  subBtn: { marginRight: 15 },
  subBtnText: { fontSize: 12, color: '#666', textDecorationLine: 'underline' }
});